'use client'

import { useEffect, useState } from "react";
import criaturas from "@/data/criaturas";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './criaturas.module.css'
import { ProgressBar } from 'react-loader-spinner'
import CardCriaturas from "@/app/components/criaturas/CardCriaturas";


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
                            <CardCriaturas id={creature.id} image={creature.image} name={creature.name} description={creature.description} location={creature.location} drops={creature.drops}/>

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