"use client";
import { useState, useEffect } from 'react';
import styles from './armors.module.css';
import eldenBoss from '@/data/eldenRing';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import { ListItens } from '@/models/ListItens';

const listItens = new ListItens();


export default function Armor() {
    const [armors, setArmors] = useState([]);
    const [api, setApi] = useState(null);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const bossFecth = async () => {
            try {
                const response = await eldenBoss();
                setApi(response);
                console.log(response);
            } catch (error) {
                throw error;
            }
        };
        bossFecth();
    }, []);
    useEffect(() => {
        if (api && api.data) {
            api.data.forEach((item) => {
                const newItem = new Armor(item.name, item.image, item.description, item.category);
                listItens.addItem(newItem);
            }
            );
            const updateItemList = [...armors, ...listItens.showItens()];
            setArmors(updateItemList);
        }
    }, [api])
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const armor = new Armor(name, image, description, category);
        if (!name && !image && !description && !category) {
            alert('Todos os campos são obrigatórios');
            return;
        } else {
            const updateList = [...listItens, armor];
            setArmors(updateList);
            listItens.addItem(armor)
            setName('');
            setImage('');
            setDescription('');
            setCategory('');
            console.log(updateList);
        }
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
                <label>Categoria</label>
                <input type="text" value={category} placeholder="Defina a Categoria" onChange={(e) => setCategory(e.target.value)} />
                <button type="submit">Adicionar Armadura</button>
            </form>
            <div className={styles.dualdiv}>
                {
                    armors ? (
                        armors.map((boss) => (
                            <div key={boss.id} className={styles.redcard}>
                                <p className={styles.centralizedText}>{boss.name}</p>
                                <p>{boss.description}</p>
                                <p>{boss.type}</p>
                                <img src={boss.image} alt={boss.name} className={styles.image} width={250} />
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
