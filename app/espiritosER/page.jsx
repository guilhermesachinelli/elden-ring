'use client'

import React, { useEffect, useState } from "react"
import espiritos from "../data/espiritosER"
import styles from "@/app/espiritosER/espiritos.module.css"

function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const espiritosFetch = async () => {
            try {
                const dados = await espiritos();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        espiritosFetch();
    }, []);

    return (
        <div className={styles.cardAll}>
            <h1 className={styles.titulo}>Espíritos:</h1>
            <div className={styles.cardAllFather}>
                {dadosApi ? (

                    dadosApi.data.map((spirit) => (
                        <div
                            key={spirit.id} className={styles.card}
                        >
                            <h2>{spirit.name}</h2>
                            <div>
                                <img src={spirit.image} alt={spirit.name} width={256} height={256}></img>
                            </div>
                            <p>{spirit.description}</p>
                            <h4 className={styles.fpCost}>Custo em FP para invocá-lo:</h4>
                            <p>{spirit.fpCost}</p>
                            <h4 className={styles.hpCost}>Custo em HP para invocá-lo:</h4>
                            <p>{spirit.hpCost}</p>
                            <h4 className={styles.effects}>Efeitos de invocação:</h4>
                            <p>{spirit.effect}</p>
                        </div>
                    ))
                ) : (
                    <p>Carregando espíritos...</p>
                )
}
            </div>

        </div>
    )
}

export default page;