import Image from 'next/image';
import NavLink from '../navlink/NavLink';
import styles from './Header.module.css';


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.dropdown}>
                <Image className={styles.dropbtn} src={'/ER_golden_order.webp'} alt={'Menu'} width={74} height={64} ></Image>
                <h1>Elden Ring </h1>
                <div className={styles.dropdown_content}>
                    <NavLink rota={'/'} text={'Home'} className={styles.navlink} />
                    <NavLink rota={'/eldenclasses'} text={'Clases'} className={styles.navlink} />
                    <NavLink rota={'/armor'} text={'Armaduras'} className={styles.navlink} />
                    <NavLink rota={'/chefes'} text={'Bosses'} className={styles.navlink} />
                </div>
            </div>
        </div>
    )
}

export default Header;