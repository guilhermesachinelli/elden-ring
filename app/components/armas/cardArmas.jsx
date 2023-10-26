import styles from './cardArmas.module.css'

const CardArma = ({id, name, image, description}) => {
    return (
        <div
                        key={id} className={styles.redcard}>
                            <div>
                            <h2 className={styles.centralizedText}>{name}</h2>
                            </div>
                        <div className={image}>
                            <img src={image} alt={name} width={256} height={256}></img>
                        </div>
                        <div className={styles.whitetext}>
                            <p>{description}</p>
                        </div>
                    </div>
    )
}

export default CardArma;