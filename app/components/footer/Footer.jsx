
import Image from 'next/image';
import styles from './Footer.module.css';
import NavImg from '../navimg/NavImg';


const Footer = () => {
    return (
        <div className={styles.footer}>
            
            <Image src="/ER_golden_order.webp" alt="Logo" width={84} height={74} />
            <p>Todos os Direitos Reservados © 2023.</p>
            
            <div className={styles.socialmedia}>
                <NavImg rota="https://instagram.com" img="/instagram.png" />
                <NavImg rota="https://github.com" img="/githublogowhite.png" />
                <NavImg rota="https://twitter.com" img="/x.png" />
            </div>
            </div>
    )
}

export default Footer;