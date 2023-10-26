'use client'
import React, { useEffect, useState } from "react";
import npc from "../../data/npc";
import styles from "./page.module.css";
import Footer from "../components/footer/Footer";
import Header from '../components/header/Header';
import { ProgressBar } from 'react-loader-spinner'
import CardNPC from "../components/cardNPC/CardNPC";

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
                    <CardNPC id={npc.id} name={npc.name} image={npc.image} quote={npc.quote} location={npc.location} role={npc.role}/>
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