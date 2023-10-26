import styles from './cardNPC.module.css'

const CardNPC = ({id, name, image, quote, location, role}) => {
    return (
        <div key={id}  className={styles.redcard}>
        <h2 className={styles.centralizedText}>{name}</h2>
        <div>
            <img src={image} alt={name} width={256} height={256} className={styles.image}></img>
        </div>
        <p className={styles.whitetext}>{quote}</p>
        <p className={styles.whitetext}>{location}📍</p>
        <p className={styles.whitetext}>{role}</p>
    </div>
    )
}

export default CardNPC;