import {AdEntity} from "types";
import React, {useEffect, useState} from 'react';
import {apiCall} from "../../utils/apiCall";


interface Props {
    id: string
}

export const SingleAd = (props: Props) => {
    const [marker, setMarker] = useState<AdEntity | null>(null);
    useEffect(() => {
        (async () => {
            const res = await apiCall(`ad/${props.id}`);
            const data = await res.json();
            setMarker(data);
        })()
    }, [])

    if (marker === null) {
        return (
            <p>Wczytywanie...</p>
        )
    }

    return (
        <>
            <h2>{marker.name}</h2>
            <p>{marker.description}</p>
            {!!marker.price && <p>{marker.price} zł</p>}
            <hr/>
            <a href={marker.url} rel="noreferrer">Otwórz ogłoszenie</a>
        </>
    )
}
