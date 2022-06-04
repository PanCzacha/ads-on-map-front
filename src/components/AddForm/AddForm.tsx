import React, {ChangeEventHandler, SyntheticEvent, useState} from 'react';
import {Btn} from '../common/Button/Btn';
import "./AddForm.css";
import {apiCall} from "../../utils/apiCall";
import {geoCodeCall} from "../../utils/geoCodeCall";
import { Spinner } from '../common/Spinner/Spinner';


export const AddForm = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");
    const [adForm, setAdForm] = useState({
        name: "",
        description: "",
        price: 0,
        url: "",
        address: "",
    })

    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const {lat, lon} = await geoCodeCall(adForm.address);
            const res = await apiCall("/ad", "POST", {
                name: adForm.name,
                description: adForm.description,
                price: adForm.price,
                url: adForm.url,
                lon: lon,
                lat: lat,
            });
            const data = await res.json();
            setId(data.id);
        } finally {
            setLoading(false);
        }

    }

    const updateForm = (key: string, value: any) => {
        setAdForm(form => ({
            ...form,
            [key]: value,
        }))
    }

    if (loading) {
        return <Spinner/>
    }

    if (id) {
        return <h2>Twoje ogłoszenie "{adForm.name} zostało dodane pod ID {id}</h2>
    }

    return (
        <form className="add-form" action="" onSubmit={saveAd}>
            <h1>Dodawanie ogłoszenia</h1>
            <p>
                <label>
                    Nazwa: <br/>
                    <input
                        type="text"
                        name="name"
                        required
                        maxLength={99}
                        value={adForm.name}
                        onChange={e => updateForm("name", e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Opis: <br/>
                    <textarea
                        name="description"
                        maxLength={999}
                        value={adForm.description}
                        onChange={e => updateForm("description", e.target.value)}>
                    </textarea>
                </label>
            </p>
            <p>
                <label>
                    Cena: <br/>
                    <input
                        type="number"
                        name="price"
                        required
                        maxLength={9999999}
                        value={adForm.price}
                        onChange={e => updateForm("price", Number(e.target.value))}/>
                    <small>Pozostaw zero aby nie dodawać ceny</small>
                </label>
            </p>
            <p>
                <label>
                    Adres URL: <br/>
                    <input
                        type="url"
                        name="url"
                        maxLength={99}
                        value={adForm.url}
                        onChange={e => updateForm("url", e.target.value)}/>
                </label>
            </p>
            <p>
                <label>
                    Adres na mapie: <br/>
                    <input
                        type="text"
                        name="address"
                        required
                        maxLength={99}
                        value={adForm.address}
                        onChange={e => updateForm("address", e.target.value)}/>
                </label>
            </p>
            <Btn text="Zapisz"/>
        </form>
    )
}
