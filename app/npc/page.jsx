'use client'
import React, { useEffect, useState } from "react";
import npc from "../../data/npc";
import styles from "./page.module.css";
import Footer from "../components/footer/Footer";
import Header from '../components/header/Header';
import { ProgressBar } from 'react-loader-spinner'

function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const npcFetch = async () => {
            try {
                const dados = await npc();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        npcFetch();
    }, []);

    return (
        <div className={styles.bckg}>
            <Header/>
            <h3 className={styles.centralizedTextTitle}>NPC's</h3>
            <div className={styles.dualdiv}>
            {dadosApi ? (
                dadosApi.data.map((npc) => (
                    <div key={npc.id}  className={styles.redcard}>
                        <h2 className={styles.centralizedText}>{npc.name}</h2>
                        <div>
                            <img src={npc.image} alt={npc.name} width={256} height={256} className={styles.image}></img>
                        </div>
                        <p className={styles.whitetext}>{npc.quote}</p>
                        <p className={styles.whitetext}>{npc.location}📍</p>
                        <p className={styles.whitetext}>{npc.role}</p>
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