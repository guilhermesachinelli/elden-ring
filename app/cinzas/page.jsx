'use client'

import React, { useEffect, useState } from "react"
import cinzas from "../../data/cinzas"
import styles from './cinzas.module.css'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ProgressBar } from 'react-loader-spinner'
import CardCinzas from "../components/cinzas/CardCinzas";

function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const cinzasFetch = async () => {
            try {
                const dados = await cinzas();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        cinzasFetch();
    }, []);

    return (
        <div className={styles.bckg}>
            <Header/>
            <h3 className={styles.centralizedTextTitle}>Cinzas da guerra</h3>
            <div className={styles.dualdiv}>
                {
                    dadosApi ? (

                        dadosApi.data.map((ash) =>
                            ash.image ?
                                (
                                    <CardCinzas id={ash.id} name={ash.name} image={ash.image} description={ash.description} affinity={ash.affinity} skill={ash.skill}></CardCinzas>
                                ) : (
                                    null
                                )
                        )
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