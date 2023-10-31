import styles from './cardClasses.module.css'

const CardClasses = ({id, name, image, level, vigor, dexterity, mind, intelligence, endurance, faith, strength, arcane, description}) => {
    return (
        <div key={id} className={styles.redcard}>
        <h1 className={styles.centralizedText}>{name}</h1>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.statusarea}>
            <table className={styles.table}>
                <tbody className={styles.tbody}>
                    <tr className={styles.tr}>
                        <td className={styles.whitetext}>
                            Level: {level}
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.whitetext}>
                            Vigor: {vigor}
                        </td>
                        <td className={styles.whitetext}>
                            Destreza: {dexterity}
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.whitetext}>
                            Mente: {mind}
                        </td>
                        <td className={styles.whitetext}>
                            Inteligencia: {intelligence}
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.whitetext}>
                            Resistência : {endurance}
                        </td>
                        <td className={styles.whitetext}>
                            Fé : {faith}
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.whitetext}>
                            Força  : {strength}
                        </td>
                        <td className={styles.whitetext}>
                            Arcano : {arcane}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className={styles.nomalCentralizedText}>{description}</p>

    </div>
    )
}

export default CardClasses;