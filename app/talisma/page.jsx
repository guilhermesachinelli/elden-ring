'use client'
import React, { useEffect, useState } from "react";
import talisma from "@/data/Talisma";
import styles from "./page.module.css";

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
        <div className={styles.bckg}>
            <div className={styles.dualdiv}>
            {dadosApi ? (
                dadosApi.data.map((agente) => (
                    <div key={agente.id}  className={styles.redcard}>
                        <h2 className={styles.centralizedText}>{agente.name}</h2>
                        <div>
                            <img src={agente.image} alt={agente.name} width={256} height={256} className={styles.image}></img>
                        </div>
                        <p className={styles.whitetext}>{agente.description}</p>
                        <p className={styles.whitetext}>{agente.effect}</p>
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