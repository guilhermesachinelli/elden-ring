"use client";
import { useState, useEffect } from 'react';
import styles from './armors.module.css';
import eldenBoss from '@/data/eldenRing';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
export default function Armor() {
    const [data, setData] = useState('');
    useEffect(() => {
        const bossFecth = async () => {
            try {
                const response = await eldenBoss();
                setData(response);
                console.log(response);
            } catch (error) {
                throw error;
            }
        };
        bossFecth();
    }, []);
    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.centralizedText}>Armaduras</h1>
            <div className={styles.dualdiv}>
                {
                    data ? (
                        data.data.map((boss) => (
                            <div key={boss.id} className={styles.redcard}>
                                <p className={styles.centralizedText}>{boss.name}</p>
                                <p>{boss.description}</p>
                                <p>{boss.type}</p>
                                <img src={boss.image} alt={boss.name} className={styles.image} width={250} />
                            </div>
                        ))
                    ) : (
                        <div>
                            <h1>Carregando...</h1>
                        </div >
                    )
                }
            </div>
            <Footer />
        </div >
    )
}
