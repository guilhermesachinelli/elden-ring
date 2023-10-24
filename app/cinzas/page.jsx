'use client'

import React, { useEffect, useState } from "react"
import cinzas from "../../data/cinzas"
import styles from './cinzas.module.css'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ProgressBar } from 'react-loader-spinner'

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
                                    <div key={ash.id} className={styles.bigcard}>
                                        <h1 className={styles.centralizedText}>{ash.name}</h1>
                                        <div>
                                            <img src={ash.image} alt={ash.name} width={256} height={256} className={styles.image}></img>
                                        </div>
                                        <p className={styles.whitetext}>{ash.description}</p>
                                        <h1 className={styles.centralizedText2}></h1>
                                        <h4 className={styles.affinity}>Afinidade: {ash.affinity}</h4>

                                        <h1 className={styles.centralizedText2}></h1>
                                        <h4 className={styles.skill}>Habilidade ativada: {ash.skill}</h4>

                                    </div>


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