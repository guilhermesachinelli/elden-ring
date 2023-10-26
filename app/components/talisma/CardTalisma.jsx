import styles from "@/app/components/talisma/talisma.module.css"

const CardTalisma = ({ id, description, effect, image, name }) => {

    return (
        <div key={id} className={styles.redcard}>
            <h2 className={styles.centralizedText}>{name}</h2>
            <div>
                <img src={image} alt={name} width={256} height={256} className={styles.image}></img>
            </div>
            <p className={styles.whitetext}>{description}</p>
            <p className={styles.whitetext}>{effect}</p>
        </div>
    )

}

export default CardTalisma;