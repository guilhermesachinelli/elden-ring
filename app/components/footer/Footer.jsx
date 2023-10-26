
import Image from 'next/image';
import styles from './Footer.module.css';
import NavImg from '../navimg/NavImg';
import NavLinkFooter from '../navlinkfooter/NavLinkFooter';


const Footer = () => {
    return (
        <div className={styles.footer}>
            
            <Image src="/ER_golden_order.webp" alt="Logo" width={84} height={74} />
            <div className={styles.menu}>
            <ul>
                <NavLinkFooter rota="/" text={"Home"} icon={"faHouse"}/>
                <NavLinkFooter rota="/eldenclasses" text={"Classes"} icon={"faScroll"}/>
                <NavLinkFooter rota="/locations" text={"Locais"} icon={"faMapLocationDot"}/>
                <NavLinkFooter rota="/chefes" text={"Bosses"} icon={"faChessKing"}/>
                <NavLinkFooter rota="/armas" text={"Armas"} icon={"faSkullCrossbones"}/>
                <NavLinkFooter rota="/armor" text={"Armaduras"} icon={"faShirt"}/>
                <NavLinkFooter rota="/talisma" text={"Talismã"} icon={"faRing"}/>
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