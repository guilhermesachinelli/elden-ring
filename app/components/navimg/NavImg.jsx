import Link from "next/link";
import styles from './NavImg.module.css';
import Image from "next/image";


const NavImg = ({ rota, img }) => {
    return (
        <div>
            <Link href={rota} className={styles.social} target='_blank'>
                <Image src={img} alt={img} width={20} height={20} />
            </Link>
        </div>
    );
}

export default NavImg;