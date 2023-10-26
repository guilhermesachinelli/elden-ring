'use client'

import armas from "@/data/Armas";
import React, {useEffect, useState} from "react";
import styles from "@/app/armas/armas.module.css";
import { ProgressBar } from 'react-loader-spinner'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const armasFetch = async () => {
            try {
                const dados = await armas();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        armasFetch();
    }, []);

    return (
        <div className={styles.bckg}>
            <Header/>
            <h1 className={styles.centralizedText}>Armas</h1>
        <div className={styles.dualdiv}>
        

            {dadosApi ? (
                dadosApi.data.map((agente) => (
                    <div
                        key={agente.id} className={styles.redcard}>
                            <div>
                            <h2 className={styles.centralizedText}>{agente.name}</h2>
                            </div>
                        <div className={styles.image}>
                            <img src={agente.image} alt={agente.name} width={256} height={256}></img>
                        </div>
                        <div className={styles.whitetext}>
                            <p>{agente.description}</p>
                        </div>
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
            </div>
            <Footer/>
        </div>
    )
}

export default page;