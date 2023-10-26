'use client'

import React, { useEffect, useState } from "react"
import espiritos from "../../data/espiritos"
import styles from "@/app/espiritos/espiritos.module.css"
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ProgressBar } from 'react-loader-spinner'
import CardEspiritos from "../components/espiritos/CardEspiritos";

function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const espiritosFetch = async () => {
            try {
                const dados = await espiritos();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        espiritosFetch();
    }, []);

    return (
        <div className={styles.bckg}>
            <Header />
            <h3 className={styles.centralizedTextTitle}>Espíritos</h3>

            <div className={styles.dualdiv}>
                {
                    dadosApi ? (

                        dadosApi.data.map((spirit) => (

                           <CardEspiritos id={spirit.id} image={spirit.image} name={spirit.name} description={spirit.description} fpCost={spirit.fpCost} hpCost={spirit.hpCost} effect={spirit.effect}/>
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