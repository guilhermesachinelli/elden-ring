import styles from './cardIndex.module.css'

const CardIndex = ({categoria, link, texto}) => {
    return (
            <div className={styles.infoCard}>
                <h2 className={styles.titleCard}>{categoria}</h2>
                <img src={link} className={styles.imgCard}></img>
                <div className={styles.divP}>
                    <p className={styles.CardP}>{texto}</p>
                </div>
            </div>
    )
}

export default CardIndex;