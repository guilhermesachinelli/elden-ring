import Link from "next/link";
import styles from './NavLink.module.css';

const NavLink = ({ rota, text }) => {
    return (
        <div>
            <Link href={rota} className={styles.linkbtn}>
                {text}
            </Link>
        </div>
    );
}

export default NavLink;