import styles from './cardChefes.module.css'

const CardChefes = ({id, name, image, region, description, drops}) => {
    return (
        <div key={id} className={styles.redcard}>
                        <div>
                            <h2 className={styles.centralizedText}>{name}</h2>
                        </div>
                        <div className={styles.image}>
                            <img src={image} alt={name} width={256} height={256} className={styles.image}></img>
                        </div>
                        <div>
                            <p className={styles.whitetext}>Região:{region}</p>
                            <p className={styles.whitetext}>Descrição:{description}</p>
                            <p className={styles.whitetext}>Drops:{drops}</p>
                        </div>
                    </div>
    )
}

export default CardChefes;