'use client'
import { useEffect, useState } from 'react';


import styles from './page.module.css'
import classesRing from '@/data/classesRing';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ProgressBar } from 'react-loader-spinner'

export default function eldenClasses() {
    const [dadosApi, setDadosApi] = useState('');

    useEffect(() => {
        const classesFetch = async () => {
            try {
                const dados = await classesRing();
                setDadosApi(dados);
            } catch (error) {
                throw error;
            }
        };
        classesFetch();
    }, []);
    return (
        <div className={styles.bckg}>
            <Header />
            <h3 className={styles.centralizedText}>Classes</h3>
            <div className={styles.dualdiv}>
                {
                    dadosApi ? (
                        dadosApi.data.map((classes) => (
                            <div key={classes.id} className={styles.redcard}>
                                <h1 className={styles.centralizedText}>{classes.name}</h1>
                                <img src={classes.image} alt={classes.name} className={styles.image} />
                                <div className={styles.statusarea}>
                                    {
                                        classes.stats.map((status) => (
                                            <div key={status.id} >
                                                <p className={styles.centralizedText}>{status.level}</p>


                                            </div>
                                        ))
                                    }
                                </div>
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
            <Footer />
        </div>

    )
}