import Link from 'next/link';
import styles from './cardIndex.module.css'

const CardIndex = ({categoria, link, texto, rota}) => {
    return (
            <div className={styles.infoCard}>
                <Link href={rota}>
                <h2 className={styles.titleCard}>{categoria}</h2>
                <img src={link} className={styles.imgCard}></img>
                <div className={styles.divP}>
                    <p className={styles.CardP}>{texto}</p>
                </div>
                </Link>
            </div>
    )
}

export default CardIndex;