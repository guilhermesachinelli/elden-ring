'use client'
import React, { useEffect, useState } from "react";
import npc from "../../data/npc";
import styles from "./page.module.css";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

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
            <h1 className={styles.centralizedText}>NPC's</h1>
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
                <p>Carregando API...</p>
            )
            }
            </div>
            <Footer />
        </div>
    )
}

export default page;