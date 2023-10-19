'use client'
import React, { useEffect, useState } from "react";
import locations from "../../data/locations";
import styles from "./page.module.css";

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
        <div className={styles.bckg}>
            <div className={styles.dualdiv}>
            {dadosApi ? (
                dadosApi.data.map((location) => (
                    <div key={location.id}  className={styles.redcard}>
                        <h2 className={styles.centralizedText}>{location.name}</h2>
                        <div>
                            <img src={location.image} alt={locations.name} width={256} height={256} className={styles.image}></img>
                        </div>
                        <p className={styles.whitetext}>{location.description}</p>
                    </div>
                ))
            ) : (
                <p>Carregando API...</p>
            )
            }
            </div>
        </div>
    )
}

export default page;
