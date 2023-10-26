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
                <NavLink rota="/eldenclasses" text={"Classes"} icon={"faScroll"}/>
                <NavLink rota="/locations" text={"Locais"} icon={"faMapLocationDot"}/>
                <NavLink rota="/chefes" text={"Bosses"} icon={"faChessKing"}/>
                <NavLink rota="/armas" text={"Armas"} icon={"faSkullCrossbones"}/>
                <NavLink rota="/armor" text={"Armaduras"} icon={"faShirt"}/>
                <NavLink rota="/talisma" text={"Talismã"} icon={"faRing"}/>
                


            </ul>
        </div>
    );
};

export default Header;
