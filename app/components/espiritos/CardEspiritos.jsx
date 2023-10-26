import styles from "@/app/components/espiritos/espiritos.module.css"

const CardEspiritos = ({id, image, name, description, fpCost, hpCost, effect}) => {

    return(
        <div key={id} className={styles.bigcard}>
        <h1 className={styles.centralizedText}>{name}</h1>
        <div>
            <img src={image} alt={name} width={256} height={256} className={styles.image}></img>
        </div>
        <p className={styles.whitetext}>{description}</p>
        <h1 className={styles.centralizedText2}></h1>
        <h4 className={styles.whitetext}>Custo em FP para invocação: {fpCost}</h4>

        <h4 className={styles.whitetext}>Custo em HP para invocação: {hpCost}</h4>

        <h1 className={styles.centralizedText2}></h1>
        <h4 className={styles.whitetext}>Efeitos de invocação: {effect}</h4>

    </div>
    )
}

export default CardEspiritos