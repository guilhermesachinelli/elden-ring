'use client'
import { useEffect, useState } from "react"


import styles from './page.module.css';
import itemsER from '@/data/itemsER';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ProgressBar } from 'react-loader-spinner'

export default function ItemsER() {
    const [dadosApi, setDadosApi] = useState('');

    useEffect(() => {
        const itemsFetch = async () => {
            try {
                const dados = await itemsER();
                setDadosApi(dados);
            } catch (error) {
                throw (error);
            }
        };
        itemsFetch();
    }, []);
    return (
        <div className={styles.em}>
            <Header />
            <h1 className={styles.textCenter}>Items</h1>
            <div className={styles.twoldiv}>
                {
                    dadosApi ? (
                        dadosApi.data.map((items) => (
                            <div className={styles.en} key={items.id}>
                                <h1 className={styles.centralizedText}>{items.name}</h1>
                                <img src={items.image} alt={items.name} className={styles.image} />
                                <p className={styles.whitetext}>{items.description}</p>
                                <p className={styles.whitetext}>{items.type}</p>
                                <p className={styles.whitetext}>{items.effect}</p>
                                <br></br>

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