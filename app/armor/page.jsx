"use client";
import { useState, useEffect } from 'react';
import styles from './armors.module.css';
import eldenBoss from '@/data/eldenRing';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ListItens } from '@/models/ListItens';
import { Item } from '@/models/eldenRing';
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
    useEffect(() => {
        let ignore = false;
        const bossFecth = async () => {
            try {
                const response = await eldenBoss();
                if (!ignore) {
                    setApi(response);
                    console.log(response);
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
        }
    }, [api])
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const armor = new Item(name, image, description);
        if (!name && !image && !description && !category) {
            alert('Todos os campos são obrigatórios');
            return;
        } else {
            const updateList = [...listItens.getItem(), armor];
            setArmors(updateList);
            listItens.addItem(armor)
            setName('');
            setImage('');
            setDescription('');
        }
    }
    const handleRemoveItem = (id) => {
        const updateList = [...listItens.getItem()].filter((item) => item.id !== id);
        setArmors(updateList);
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
        listItens.updateItem(flag ,name, image, description );
        setEditButton(false);
    }
    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.centralizedText}>Armaduras</h1>
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
            <input type="text" value={search} placeholder="Pesquise uma Armadura" onChange={(e) => setSearch(e.target.value)} />
            <div className={styles.dualdiv}>
                {
                    armors ? (
                        armors.map((armor) =>
                        (
                            <div key={armor.id} className={styles.redcard}>
                                <p className={styles.centralizedText}>{armor.name}</p>
                                <p>{armor.description}</p>
                                <p>{armor.type}</p>
                                <img src={armor.image} alt={armor.name} className={styles.image} width={250} />
                                <button onClick={() => handleRemoveItem(armor.id)}>Remover</button>
                                <button onClick={() => handleEditItem(armor.id)}>Editar</button>
                            </div>
                        ))
                    ) : (
                        <div>
                            <ProgressBar
                                height="80"
                                width="80"
                                ariaLabel="progress-bar-loading"
                                wrapperStyle={{}}
                                wrapperClass="progress-bar-wrapper"
                                borderColor='#42b883'
                                barColor='#51E5FF'
                            />
                        </div >
                    )
                }
            </div>
            <Footer />
        </div >
    )
}
