'use client'
import React, { useEffect, useState } from "react";
import locations from "../data/locations";

function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const locationsFetch = async () => {
            try {
                const dados = await locations();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        locationsFetch();
    }, []);

    return (
        <div>
            {dadosApi ? (
                dadosApi.data.map((location) => (
                    <div key={location.id}>
                        <h2>{location.name}</h2>
                        <div>
                            <img src={location.image} alt={locations.name} width={256} height={256}></img>
                        </div>
                        <p>{location.description}</p>
                    </div>
                ))
            ) : (
                <p>Carregando API...</p>
            )
            }
        </div>
    )
}

export default page;
