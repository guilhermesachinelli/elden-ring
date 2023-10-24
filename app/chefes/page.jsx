'use client'

import chefes from "@/data/Chefes";
import React, { useEffect, useState } from "react";
import styles from "@/app/chefes/chefes.module.css"
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

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
                    <div key={agente.id} className={styles.redcard}>
                        <div>
                            <h2 className={styles.centralizedText}>{agente.name}</h2>
                        </div>
                        <div className={styles.image}>
                            <img src={agente.image} alt={agente.name} width={256} height={256} className={styles.image}></img>
                        </div>
                        <div>
                            <p className={styles.whitetext}>Região: {agente.region}</p>
                            <p className={styles.whitetext}>Descrição: {agente.description}</p>
                            <p className={styles.whitetext}>Drops: {agente.drops}</p>

                        </div>
                    </div>
                ))
            ) : (
                <p>Carregando API...</p>
            )
            }
            </div>
            <Footer />
        </div>
    )
}

export default page;