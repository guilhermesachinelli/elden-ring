'use client'

import React, { useEffect, useState } from "react"
import espiritos from "../../data/espiritos"
import styles from "@/app/espiritos/espiritos.module.css"
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ProgressBar } from 'react-loader-spinner'

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
            <Header/>
            <h3 className={styles.centralizedTextTitle}>Espíritos</h3>
            
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
                                <h4 className={styles.whitetext}>Custo em FP para invocação: {spirit.fpCost}</h4>
                    
                                <h4 className={styles.whitetext}>Custo em HP para invocação: {spirit.hpCost}</h4>
                    
                                <h1 className={styles.centralizedText2}></h1>
                                <h4 className={styles.whitetext}>Efeito de invocação: {spirit.effect}</h4>
            
                            </div>
                        ))
                    ) : (
                        <ProgressBar
                        height="80"
                        width="80"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor='#42b883'
                        barColor='#51E5FF'
                    />
                    )
                }
                 <Footer />
            </div>

        </div>
    )
}

export default page;