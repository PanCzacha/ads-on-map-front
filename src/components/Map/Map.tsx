import React, {useEffect, useState} from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {MarkupsList} from "types";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import "../../utils/fix-map-icon";
import {LatLngExpression} from "leaflet";
import {validateResponse} from "../../utils/validateResponse";
import {apiCall} from "../../utils/apiCall";


export const Map = () => {
    const [data, setData] = useState<MarkupsList | null>(null);
    const position: LatLngExpression = [52.1026339,21.2385117];

    const refreshMarkupsList = async () => {
        setData(null);
        const res = await apiCall("list");
        await validateResponse(res);
        const data = await res.json();
        setData(data);
    }

    useEffect(() => {
        refreshMarkupsList();
    }, []);

    return(
        <div className="map">
            <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    data === null
                    ? null
                    : data.markersList
                        .map(marker =>
                            <Marker key={marker.id} position={[marker.lon, marker.lat]}>
                                <Popup>
                            {marker.name}<br/>{marker.url}
                                </Popup>
                            </Marker>)
                }
            </MapContainer>
        </div>
    )
}
