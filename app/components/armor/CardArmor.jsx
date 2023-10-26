import styles from './cardArmor.module.css'

const CardArmor = ({id, name, image, description}) => {
    return (
        <div key={id} className={styles.redcard}>
                                <p className={styles.centralizedText}>{name}</p>
                                <p>{description}</p>
                                <p>{type}</p>
                                <img src={image} alt={name} className={image} width={250} />
                            </div>
    )
}

export default CardArmor;