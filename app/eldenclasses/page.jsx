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
import CardClasses from '../components/cardClasses/CardClasses';

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
                            <CardClasses id={classes.id} name={classes.id} image={classes.image} level={classes.stats.level} vigor={classes.stats.vigor} dexterity={classes.stats.dexterity} mind={classes.stats.mind} intelligence={classes.stats.intelligence} endurance={classes.stats.endurance} faith={classes.stats.faith} strength={classes.stats.strength} arcane={classes.stats.arcane} description={classes.stats.description}></CardClasses>

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