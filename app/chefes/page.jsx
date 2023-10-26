'use client'

import chefes from "@/data/Chefes";
import React, { useEffect, useState } from "react";
import styles from "@/app/chefes/chefes.module.css"
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ProgressBar } from 'react-loader-spinner'
import CardChefes from "../components/chefes/CardChefes";

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
        <div  className={styles.bckg}> 
        <Header/>
        <h1 className={styles.centralizedText}>Chefes</h1>
        <div className={styles.dualdiv}>

            {dadosApi ? (
                
                dadosApi.data.map((agente) => (
                    <CardChefes id={agente.id} name={agente.name} image={agente.image} region={agente.region} description={agente.description} drops={agente.drops}></CardChefes>
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
            <Footer />
        </div>
    )
}

export default page;