'use client'

import React, { useEffect, useState } from "react"
import cinzas from "../data/cinzasER"
import styles from "@/app/cinzasER/cinzas.module.css"

function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const cinzasFetch = async () => {
            try {
                const dados = await cinzas();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        cinzasFetch();
    }, []);

    return (
        <div className={styles.cardAll}>
            <h1 className={styles.titulo}>Cinzas da Guerra:</h1>
            <div className={styles.cardAllFather}>
                {dadosApi ? (

                    dadosApi.data.map((ash) => (
                        <div
                            key={ash.id} className={styles.card}
                        >
                            <h2>{ash.name}</h2>
                            <div>
                                <img src={ash.image} alt={ash.name} width={256} height={256}></img>
                            </div>
                            <p>{ash.description}</p>
                            <h4 className={styles.affinity}>Afinidade:</h4>
                            <p>{ash.affinity}</p>
                            <h4 className={styles.skill}>Habilidade ativada:</h4>
                            <p>{ash.skill}</p>
                        
                        </div>
                    ))
                ) : (
                    <p>Carregando Cinzas da Guerra...</p>
                )
}
            </div>

        </div>
    )
}

export default page;