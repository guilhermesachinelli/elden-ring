'use client'
import React, { useEffect, useState } from "react";
import talisma from "@/data/Talisma";
import styles from "./page.module.css";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ProgressBar } from 'react-loader-spinner'
import CardTalisma from "@/app/components/talisma/CardTalisma"

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
            <Header/>
            <h3 className={styles.centralizedTextTitle}>Talismã</h3>
            <div className={styles.dualdiv}>
            {dadosApi ? (
                dadosApi.data.map((talisma) => (
                  <CardTalisma id={talisma.id} name={talisma.name} image={talisma.image} description={talisma.description} effect={talisma.effect}/>
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