'use client'

import chefes from "@/data/Chefes";
import React, { useEffect, useState } from "react";
import styles from "@/app/chefes/chefes.module.css"

function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const chefesFetch = async () => {
            try {
                const dados = await chefes();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        chefesFetch();
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
                        <div className={styles.region}>
                            <p>{agente.region}</p>
                        </div>
                        <div className={styles.text}>
                            <p>{agente.description}</p>
                        </div>
                        <div className={styles.location}>
                        </div>
                        <div className={styles.drops}>
                            <p>{agente.drops}</p>
                        </div>
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