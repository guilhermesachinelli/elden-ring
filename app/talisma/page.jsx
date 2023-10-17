'use client'

import talisma from "@/data/Talisma";
import React, {useEffect, useState} from "react";
import styles from "@/app/talisma/talisma.module.css"

function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const talismaFetch = async () => {
            try {
                const dados = await talisma();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        talismaFetch();
    }, []);

    return (
        <div className={styles.box}>

            {dadosApi ? (
                dadosApi.data.map((agente) => (
                    <div
                        key={agente.id} className={styles.box}
                    >
                        <div className={styles.title}>
                            <h2>{agente.name}</h2>
                        </div>
                        <div className={styles.image}>
                            <img src={agente.image} alt={agente.name} width={256} height={256}></img>
                        </div>
                        <div className={styles.text}>
                            <p>{agente.description}</p>
                        </div>
                        <p>{agente.effect}</p>
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