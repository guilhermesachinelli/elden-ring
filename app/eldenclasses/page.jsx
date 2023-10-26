'use client'
import { useEffect, useState } from 'react';


import styles from './page.module.css'
import classesRing, { changePage } from '@/data/classesRing';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ProgressBar } from 'react-loader-spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default function eldenClasses() {
    const [dadosApi, setDadosApi] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    const nextPage = () => {
        setPageNumber(pageNumber + 1)
        changePage(pageNumber)
    }

    const prevPage = () => {
        if (pageNumber <= 0) {
            return
        } else {
            setPageNumber(pageNumber - 1)
            changePage(pageNumber)
        }
    }

    const selectPage = (e) => {
        setPageNumber(e.target.value)
        changePage(e.target.value)
    }


    useEffect(() => {
        let ignore = false
        const classesFetch = async () => {
            try {
                const dados = await classesRing();
                if (!ignore) {
                    setDadosApi(dados)
                }
            } catch (error) {
                throw error;
            }
        };
        classesFetch();
        return () => { ignore = true }
    }, [pageNumber]);
    return (
        <div className={styles.bckg}>
            <Header />
            <h1 className={styles.centralizedText}>Classes</h1>
            <div className={styles.btnarea}>
                <button className={styles.btn} onClick={prevPage}>
                    <FontAwesomeIcon icon={faCaretLeft} />
                </button>
                <select className={styles.select} onChange={selectPage}>
                    <option value="0">Page 1</option>
                    <option value="1">Page 2</option>
                    <option value="2">Page 3</option>
                    <option value="3">Page 4</option>
                </select>
                <button className={styles.btn} onClick={nextPage}>
                    <FontAwesomeIcon icon={faCaretRight} />
                </button>
            </div>
            <div className={styles.dualdiv}>

                {

                    dadosApi ? (
                        dadosApi.data.map((classes) => (
                            <div key={classes.id} className={styles.redcard}>
                                <h1 className={styles.centralizedText}>{classes.name}</h1>
                                <img src={classes.image} alt={classes.name} className={styles.image} />
                                <div className={styles.statusarea}>
                                    <table className={styles.table}>
                                        <tbody className={styles.tbody}>
                                            <tr className={styles.tr}>
                                                <td className={styles.whitetext}>
                                                    Level: {classes.stats.level}
                                                </td>
                                            </tr>
                                            <tr className={styles.tr}>
                                                <td className={styles.whitetext}>
                                                    Vigor: {classes.stats.vigor}
                                                </td>
                                                <td className={styles.whitetext}>
                                                    Destreza: {classes.stats.dexterity}
                                                </td>
                                            </tr>
                                            <tr className={styles.tr}>
                                                <td className={styles.whitetext}>
                                                    Mente: {classes.stats.mind}
                                                </td>
                                                <td className={styles.whitetext}>
                                                    Inteligencia: {classes.stats.intelligence}
                                                </td>
                                            </tr>
                                            <tr className={styles.tr}>
                                                <td className={styles.whitetext}>
                                                    Resistência : {classes.stats.endurance}
                                                </td>
                                                <td className={styles.whitetext}>
                                                    Fé : {classes.stats.faith}
                                                </td>
                                            </tr>
                                            <tr className={styles.tr}>
                                                <td className={styles.whitetext}>
                                                    Força  : {classes.stats.strength}
                                                </td>
                                                <td className={styles.whitetext}>
                                                    Arcano : {classes.stats.arcane}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className={styles.nomalCentralizedText}>{classes.description}</p>

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