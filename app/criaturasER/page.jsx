'use client'

import React, { useEffect, useState } from "react"
import criaturas from "../data/criaturasER";
import styles from "@/app/criaturasER/criaturas.module.css"

function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const criaturasFetch = async () => {
            try {
                const dados = await criaturas();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        criaturasFetch();
    }, []);

    return (
        <div className={styles.cardAll}>
            <h1 className={styles.titulo}>Criaturas:</h1>
            <div className={styles.cardAllFather}>
                {dadosApi ? (

                    dadosApi.data.map((creature) => (
                        <div
                            key={creature.id} className={styles.card}
                        >
                            <h2>{creature.name}</h2>
                            <div>
                                <img src={creature.image} alt={creature.name} width={256} height={256}></img>
                            </div>
                            <p>{creature.description}</p>
                            <h4 className={styles.local}>Local:</h4>
                            <p>{creature.location}</p>
                            <h4 className={styles.drops}>Drops:</h4>
                            <p>{creature.drops}</p>
                        </div>
                    ))
                ) : (
                    <p>Carregando criaturas...</p>
                )
}
            </div>

        </div>
    )
}

export default page;