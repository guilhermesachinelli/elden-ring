'use client'
import React, { useEffect, useState } from "react";
import locations from "../../data/locations";
import styles from "./page.module.css";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ProgressBar } from 'react-loader-spinner'
import CardLocation from "../components/cardLocations/CardLocations";

function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const locationsFetch = async () => {
            try {
                const dados = await locations();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        locationsFetch();
    }, []);

    return (
        <div className={styles.bckg}>
            <Header/>
            <h3 className={styles.centralizedTextTitle}>Localizações</h3>
            <div className={styles.dualdiv}>
                {dadosApi ? (
                    dadosApi.data.map((location) => (
                        <CardLocation id={location.id} name={location.name} image={location.image} description={location.description}></CardLocation>
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
