import styles from './CardLocations.module.css'

const CardLocation = ({id, name, image, description}) => {
    return (
        <div key={id} className={styles.redcard}>
        <h2 className={styles.centralizedText}>{name}</h2>
        <div>
            <img src={image} alt={name} width={256} height={256} className={styles.image}></img>
        </div>
    <p className={styles.whitetext}>{description}</p>
</div>
    )
}

export default CardLocation;