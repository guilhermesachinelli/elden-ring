'use client'
import React, { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import NavLink from '../navlink/NavLink';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ''}`}>
            <div className={styles.menu}>
            <div className={styles.icon} onClick={toggleMenu}>
                <Image src="/ER_golden_order.webp" alt="Elden Ring" width={84} height={74} />
            </div>
            </div>
            <ul className={styles.menuItems}>
                <NavLink rota="/" text={"Home"} icon={"faHouse"}/>
                <NavLink rota="/eldenclasses" text={"Classes"} icon={"faFolderTree"}/>
                <NavLink rota="/armas" text={"Armas"} icon={"faKhanda"}/>
                <NavLink rota="/armor" text={"Armaduras"} icon={"faShirt"}/>
                <NavLink rota="/talisma" text={"Talismã"} icon={"faJediOrder"}/>
                <NavLink rota="/locations" text={"Locais"} icon={"faEarthEurope"}/>
                <NavLink rota="/cinzas" text={"Cinzas"} icon={"faWandSparkles"}/>
                <NavLink rota="/npc" text={"NPCs"} icon={"faPeopleGroup"}/>
                <NavLink rota="/chefes" text={"Bosses"} icon={"faChessKing"}/>
                <NavLink rota="/criaturas" text={"Criaturas"} icon={"faDAndD"}/>
                <NavLink rota="/espiritos" text={"Espiritos"} icon={"faStreetView"}/>
            </ul>
        </div>
    );
};

export default Header;
