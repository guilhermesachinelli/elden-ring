'use client'
import React, { useEffect, useState } from "react";
import npc from "../../data/npc";

function page() {
    const [dadosApi, setDadosApi] = useState(null);

    useEffect(() => {
        const npcFetch = async () => {
            try {
                const dados = await npc();
                setDadosApi(dados);
                console.log(dados);
            } catch (e) {
                throw e;
            }
        };
        npcFetch();
    }, []);

    return (
        <div>
            {dadosApi ? (
                dadosApi.data.map((npc) => (
                    <div key={npc.id}>
                        <h2>{npc.name}</h2>
                        <div>
                            <img src={npc.image} alt={npc.name} width={256} height={256}></img>
                        </div>
                        <p>{npc.quote}</p>
                        <p>{npc.location}📍</p>
                        <p>{npc.role}</p>
                    </div>
                ))
            ) : (
                <p>Carregando API...</p>
            )
            }
        </div>
    )
}

export default page;