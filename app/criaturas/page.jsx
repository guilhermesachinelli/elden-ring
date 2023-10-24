'use client'

import { useEffect, useState } from "react";
import criaturas from "@/data/criaturas";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './criaturas.module.css'
import { ProgressBar } from 'react-loader-spinner'


function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const criaturasFetch = async () => {
            try {
                const dados = await criaturas();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        criaturasFetch();
    }, []);

    return (
        <div className={styles.bckg}>
            <h3 className={styles.centralizedTextTitle}>Criaturas:</h3>
            <Header/>
            <div className={styles.dualdiv}>
                {
                    dadosApi ? (

                        dadosApi.data.map((creature) => (

                            <div key={creature.id} className={styles.bigcard}>
                                <h1 className={styles.centralizedText}>{creature.name}</h1>

                                <img src={creature.image} alt={creature.name} width={256} height={256} className={styles.image}></img>

                                <p className={styles.whitetext}>{creature.description}</p>
                                <h1 className={styles.centralizedText2}></h1>
                                <h4 className={styles.whitetext}>Local: {creature.location}</h4>
                                <h1 className={styles.centralizedText2}></h1>
                                <h4 className={styles.whitetext}>Drops: {creature.drops}</h4>

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
                <Footer />
            </div>

        </div>
    )
}

export default page;