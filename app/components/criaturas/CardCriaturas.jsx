import styles from "@/app/components/criaturas/criaturas.module.css"


const CardCriaturas = ({id, image, name, description, location, drops }) => {
    return (

        <div key={id} className={styles.bigcard}>
            <h1 className={styles.centralizedText}>{name}</h1>

            <img src={image} alt={name} width={256} height={256} className={styles.image}></img>

            <p className={styles.whitetext}>{description}</p>
            <h1 className={styles.centralizedText2}></h1>
            <h4 className={styles.whitetext}>Local: {location}</h4>
            <h1 className={styles.centralizedText2}></h1>
            <h4 className={styles.whitetext}>Drops: {drops}</h4>

        </div>
    )
}

export default CardCriaturas