
import Image from 'next/image';
import styles from './Footer.module.css';
import NavImg from '../navimg/NavImg';
import NavLink from '../navlink/NavLink';


const Footer = () => {
    return (
        <div className={styles.footer}>
            
            <Image src="/ER_golden_order.webp" alt="Logo" width={84} height={74} />
            <div className={styles.menu}>
            <ul>
                <NavLink rota="/" text={"Home"} icon={"faHouse"}/>
                <NavLink rota="/eldenclasses" text={"Classes"} icon={"faScroll"}/>
                <NavLink rota="/locations" text={"Locais"} icon={"faMapLocationDot"}/>
                <NavLink rota="/chefes" text={"Bosses"} icon={"faChessKing"}/>
                <NavLink rota="/armas" text={"Armas"} icon={"faSkullCrossbones"}/>
                <NavLink rota="/armor" text={"Armaduras"} icon={"faShirt"}/>
                <NavLink rota="/talisma" text={"Talismã"} icon={"faRing"}/>
            </ul>
            </div>
            <div className={styles.direitos}>
            <p>Todos os Direitos Reservados © 2023.</p>
            
            <div className={styles.socialmedia}>
                <NavImg rota="https://instagram.com" img="/instagram.png" />
                <NavImg rota="https://github.com" img="/githublogowhite.png" />
                <NavImg rota="https://twitter.com" img="/x.png" />
            </div>
            </div>
        </div>
    )
}

export default Footer;