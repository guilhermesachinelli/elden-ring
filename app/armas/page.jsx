'use client'

import armas from "@/data/Armas";
import React, {useEffect, useState} from "react";
import styles from "@/app/armas/armas.module.css";
import { ProgressBar } from 'react-loader-spinner'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CardArma from "../components/armas/cardArmas";

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
                   <CardArma id={agente.id} image={agente.image} description={agente.description}></CardArma>
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