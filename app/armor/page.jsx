"use client";
import { useState, useEffect } from 'react';
import eldenBoss from '@/data/eldenRing';
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
        <div>
            {
                data ? (
                    data.data.map((boss) => (
                        <div key={boss.id}>
                            <h1>{boss.name}</h1>
                            <p>{boss.description}</p>
                            <p>{boss.type}</p>
                            <img src={boss.image} alt={boss.name} />
                        </div>
                    ))
                ) : (
                    <div>
                        <h1>Carregando...</h1>
                    </div >
                )
            }
        </div >
    )
}
