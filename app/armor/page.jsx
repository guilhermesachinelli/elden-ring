"use client";
import { useState, useEffect } from 'react';
import styles from './armors.module.css';
import eldenBoss from '@/data/eldenRing';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { CubeSpinner } from "react-spinners-kit";
import { ListItens } from '@/models/ListItens';
import { Item } from '@/models/eldenRing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import PopupMessage from '../components/popUp/PopUp';
const listItens = new ListItens();

export default function Armor() {
    const [armors, setArmors] = useState([]);
    const [api, setApi] = useState(null);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [search, setSearch] = useState('');
    const [flag, setFlag] = useState(0);
    const [editButton, setEditButton] = useState(false);
    const [sliceArmors, setSliceAmors] = useState(listItens.getFirstItens());
    const [pageNumber, setPageNumber] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');

    let limit = armors.length;

    const changePage = (page) => {
        setSliceAmors(armors.slice(page, page + 4))
    }

    const nextPage = () => {
        if (pageNumber < limit - 1) {

            setPageNumber(pageNumber + 1);
            changePage(pageNumber + 1);
        }
    }
    const prevPage = () => {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
            changePage(pageNumber - 1);
        }
    }

    useEffect(() => {
        let ignore = false;
        const bossFecth = async () => {
            try {
                const response = await eldenBoss();
                if (!ignore) {
                    setApi(response);
                }
            } catch (error) {
                throw error;
            }
        };
        bossFecth();
        return () => {
            ignore = true;
        }
    }, []);
    useEffect(() => {
        if (api && api.data) {
            api.data.forEach((item) => {
                const newItem = new Item(item.id, item.name, item.image, item.description, item.category);
                listItens.addItem(newItem);
            }
            );
            const updateItemList = [...armors, ...listItens.getItem()];
            setArmors(updateItemList);
            setSliceAmors(listItens.getFirstItens())

        }
    }, [api])


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const armor = new Item(name, image, description);
        if (!name && !image && !description) {
            handleShowPopup('Preencha todos os campos', 'error', 4000)
            return;
        } else {
            const updateList = [...listItens.getItem(), armor];
            setArmors(updateList);
            listItens.addItem(armor)
            setName('');
            setImage('');
            setDescription('');
            handleShowPopup('Armadura Adicionada com sucesso', 'success', 4000)
        }
    }
    const handleRemoveItem = (id) => {
        const updateArmors = [...armors].filter((item) => item.id !== id);
        setArmors(updateArmors);
        setSliceAmors(updateArmors.slice(pageNumber, pageNumber + 4))
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
        setName('');
        setImage('');
        setDescription('');
        handleShowPopup('Armadura Editada com sucesso', 'success', 4000)
    }
    const handleShowPopup = (message, type, time) => {
        setPopupMessage(message)
        setPopupType(type)
        setShowPopup(true)
        setTimeout(() => {
            setShowPopup(false)
        }, time)
    }
    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.centralizedText}>Armaduras</h1>
            <form onSubmit={handleFormSubmit} className={styles.formarea}>
                <label className={styles.label}>Nome</label>
                <input type="text" value={name} placeholder="Digite um nome para a Armadura" onChange={(e) => setName(e.target.value)} className={styles.input}/>
                <label className={styles.label}>Imagem</label>
                <input type="text" value={image} placeholder="coloque uma imagem" onChange={(e) => setImage(e.target.value)} className={styles.input}/>
                <label className={styles.label}>Descrição</label>
                <input type="text" value={description} placeholder="Adicione uma Descrição" onChange={(e) => setDescription(e.target.value)} className={styles.input}/>
                {editButton ? <button onClick={update} className={styles.btn}>Editar Armadura</button> : <button type="submit" className={styles.btn}>Adicionar Armadura</button>}
                <input type="text" value={search} placeholder="Pesquise uma Armadura" onChange={(e) => setSearch(e.target.value)} className={styles.input}/>
            </form>

            <div className={styles.btnarea}>
                <button className={styles.btn} onClick={prevPage}>
                    <FontAwesomeIcon icon={faCaretLeft} />
                </button>
                <button className={styles.btn} onClick={nextPage}>
                    <FontAwesomeIcon icon={faCaretRight} />
                </button>
            </div>
            <div className={styles.dualdiv}>
                {
                    sliceArmors ? (
                        sliceArmors.map((armor) =>
                        (
                            <div key={armor.id} className={styles.redcard}>
                                <p className={styles.centralizedText}>{armor.name}</p>
                                <p>{armor.description}</p>
                                <p>{armor.type}</p>
                                <img src={armor.image} alt={armor.name} className={styles.image} width={250} />
                                <button onClick={() => handleRemoveItem(armor.id)} className={styles.btn}>Remover</button>
                                <button onClick={() => handleEditItem(armor.id)} className={styles.btn}>Editar</button>
                            </div>

                        ))
                    ) : (
                        <div>
<CubeSpinner size={25} frontColor="#00ff89" backColor="#686769" sizeUnit="px" loading={true}/>
                        </div >
                    )
                }
            </div>
            {
                showPopup ? (
                    <PopupMessage message={popupMessage} type={popupType} />
                ) : null
            }
            <Footer />
        </div >
    )
}
