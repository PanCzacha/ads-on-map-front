import React, {useContext, useEffect, useState} from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import "../../utils/fix-map-icon";
import {LatLngExpression} from "leaflet";
import {SearchContext} from "../../contexts/searchContext";
import {apiCall} from "../../utils/apiCall";
import { SimpleAdEntity } from "types";
import {SingleAd} from "./SingleAd";


export const Map = () => {
    const {search} = useContext(SearchContext);
    const [markers, setMarkers] = useState<SimpleAdEntity[]>([]);
    const position: LatLngExpression = [52.1026339,21.2385117];

    const getMarkers = async () => {
        const res = await apiCall(`/ad/search/${search}`);
        const data = await res.json();
        setMarkers(data);
    }

    useEffect(() => {
        getMarkers();
    }, [search]);

    return(
        <div className="map">
            <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    markers
                        .map(marker =>
                            <Marker key={marker.id} position={[marker.lat, marker.lon]}>
                                <Popup>
                                    <SingleAd id={marker.id}/>
                                </Popup>
                            </Marker>)
                }
            </MapContainer>
        </div>
    )
}
