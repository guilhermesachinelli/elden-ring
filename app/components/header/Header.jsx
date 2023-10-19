import NavLink from '../navlink/NavLink';
import styles from './Header.module.css';


const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink rota={'/'} text={'Home'} />
            <NavLink rota={'/eldenclasses'} text={'Clases'} />
            <NavLink rota={'/armor'} text={'Armaduras'} />
            <NavLink rota={'/chefes'} text={'Bosses'} />
        </div>
    )
}

export default Header;