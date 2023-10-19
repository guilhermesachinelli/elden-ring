'use client'

import React, { useEffect, useState } from "react"
import espiritos from "../../data/espiritos"
import styles from "@/app/espiritos/espiritos.module.css"

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
        <div className={styles.bckg}>
            <h3 className={styles.centralizedTextTitle}>Espíritos:</h3>
            <div className={styles.dualdiv}>
                {
                    dadosApi ? (

                        dadosApi.data.map((spirit) => (

                            <div key={spirit.id} className={styles.bigcard}>
                                <h1 className={styles.centralizedText}>{spirit.name}</h1>
                                <div>
                                    <img src={spirit.image} alt={spirit.name} width={256} height={256} className={styles.image}></img>
                                </div>
                                <p className={styles.whitetext}>{spirit.description}</p>
                                <h1 className={styles.centralizedText2}></h1>
                                <h4 className={styles.whitetext}>Custo em FP para invocação:</h4>
                                <p className={styles.whitetext}>{spirit.fpCost}</p>
                                <h4 className={styles.whitetext}>Custo em HP para invocação:</h4>
                                <p className={styles.whitetext}>{spirit.hpCost}</p>
                                <h1 className={styles.centralizedText2}></h1>
                                <h4 className={styles.whitetext}>Efeitos de invocação:</h4>
                                <p className={styles.whitetext}>{spirit.effect}</p>
                            </div>
                        ))
                    ) : (
                        <p>Carregando espíritos....</p>
                    )
                }
            </div>

        </div>
    )
}

export default page;