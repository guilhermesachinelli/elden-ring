import styles from './cardCinzas.module.css'

const CardCinzas = ({ id, name, image, description, affinity, skill }) => {
    return (
        <div key={id} className={styles.bigcard}>
            <h1 className={styles.centralizedText}>{name}</h1>
            <div>
                <img src={image} alt={name} width={256} height={256} className={image}></img>
            </div>
            <p className={styles.whitetext}>{description}</p>
            <h1 className={styles.centralizedText2}></h1>
            <h4 className={styles.affinity}>Afinidade: {affinity}</h4>

            <h1 className={styles.centralizedText2}></h1>
            <h4 className={styles.skill}>Habilidade ativada: {skill}</h4>

        </div>
    )
}

export default CardCinzas;