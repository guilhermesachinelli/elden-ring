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
import { ListItens } from '@/models/ListItens';
import { Person } from '@/models/eldenRing';
const listItens = new ListItens();
export default function eldenClasses() {
    const [classes, setClasses] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [flag, setFlag] = useState(0);
    const [editButton, setEditButton] = useState(false);
    const [dadosApi, setDadosApi] = useState(null);
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
    useEffect(() => {
        if (dadosApi && dadosApi.data) {
            dadosApi.data.forEach((person) => {
                const newClass = new Person(person.id, person.name, person.image, person.description, person.stats);
                listItens.addItem(newClass);
            }
            );
            const updateItemList = [...classes, ...listItens.getItem()];
            setClasses(updateItemList);
        };
    }, [dadosApi]);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const classe = new Item(name, image, description);
        if (!name && !image && !description) {
            alert('Todos os campos são obrigatórios');
            return;
        } else {
            const updateList = [...listItens.getItem(), classe];
            setClasses(updateList);
            listItens.addItem(classe)
            setName('');
            setImage('');
            setDescription('');
        }
    };
    const handleRemoveItem = (id) => {
        const updateList = [...listItens.getItem()].filter((item) => item.id !== id);
        setClasses(updateList);
        listItens.removeItem(id);
    }
    const handleEditItem = (id) => {
        const item = listItens.getItemById(id);
        setName(item.name);
        setImage(item.image);
        setDescription(item.description);
        setEditButton(true);
        setFlag(id)
    }
    const update = () => {
        listItens.updateItem(flag, name, image, description);
        setEditButton(false);
    }
    return (
        <div className={styles.bckg}>
            <Header />
            <h1 className={styles.centralizedText}>Classes</h1>
            <div className={styles.btnarea}>
                <button className={styles.btn} onClick={prevPage}>
                    <FontAwesomeIcon icon={faCaretLeft} />
                </button>
                <select className={styles.select} onChange={selectPage}>
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                </select>
                <button className={styles.btn} onClick={nextPage}>
                    <FontAwesomeIcon icon={faCaretRight} />
                </button>
            </div>
            <form onSubmit={handleFormSubmit}>
                <label>Nome</label>
                <input type="text" value={name} placeholder="Digite um nome para a Armadura" onChange={(e) => setName(e.target.value)} />
                <label>Imagem</label>
                <input type="text" value={image} placeholder="coloque uma imagem" onChange={(e) => setImage(e.target.value)} />
                <label>Descrição</label>
                <input type="text" value={description} placeholder="Adicione uma Descrição" onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Adicionar Armadura</button>
                {editButton ? <button onClick={update}>Editar Armadura</button> : null}
            </form>
            <div className={styles.dualdiv}>

                {

                    classes ? (
                        classes.map((cl) => (
                            <div key={cl.id} className={styles.redcard}>
                                <h1 className={styles.centralizedText}>{cl.name}</h1>
                                <img src={cl.image} alt={cl.name} className={styles.image} />
                                <div className={styles.statusarea}>
                                    <table className={styles.table}>
                                        <tbody className={styles.tbody}>
                                            <tr className={styles.tr}>
                                                <td className={styles.whitetext}>
                                                    Level: {cl.level}
                                                </td>
                                            </tr>
                                            <tr className={styles.tr}>
                                                <td className={styles.whitetext}>
                                                    Vigor: {cl.vigor}
                                                </td>
                                                {/* <td className={styles.whitetext}>
                                                    Destreza: {cl.dexterity}
                                                </td> */}
                                            </tr>
                                            <tr className={styles.tr}>
                                                <td className={styles.whitetext}>
                                                    Mente: {cl.mind}
                                                </td>
                                                {/* <td className={styles.whitetext}>
                                                    Inteligencia: {cl.intelligence}
                                                </td> */}
                                            </tr>
                                            <tr className={styles.tr}>
                                                <td className={styles.whitetext}>
                                                    Resistência : {cl.endurance}
                                                </td>
                                                {/* <td className={styles.whitetext}>
                                                    Fé : {cl.faith}
                                                </td> */}
                                            </tr>
                                            <tr className={styles.tr}>
                                                <td className={styles.whitetext}>
                                                    Força  : {cl.strength}
                                                </td>
                                                {/* <td className={styles.whitetext}>
                                                    Arcano : {cl.stats.arcane}
                                                </td>*/}
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