import Link from "next/link";
import styles from './NavLink.module.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { faFolderTree } from "@fortawesome/free-solid-svg-icons";
import { faJediOrder } from "@fortawesome/free-brands-svg-icons";
import { faKhanda } from "@fortawesome/free-solid-svg-icons";
import { faWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { faDAndD } from "@fortawesome/free-brands-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons"

const NavLink = ({ rota, text, icon }) => {
    return (
        <div>
            <Link href={rota} className={styles.linkbtn}>
                {text}
                {icon === "faHouse" && (

                    <FontAwesomeIcon icon={faHouse} className={styles.icon} />
                )
                }
                {icon === "faShirt" && (

                    <FontAwesomeIcon icon={faShirt} className={styles.icon} />
                )
                }

                {icon === "faChessKing" && (

                    <FontAwesomeIcon icon={faChessKing} className={styles.icon} />
                )
                }
                {icon === "faEarthEurope" && (

                    <FontAwesomeIcon icon={faEarthEurope} className={styles.icon} />

                )
                }
                {icon === "faFolderTree" && (


                    <FontAwesomeIcon icon={faFolderTree} className={styles.icon} />
                )
                }
                {
                    icon === "faJediOrder" && (

                        <FontAwesomeIcon icon={faJediOrder} className={styles.icon} />
                    )
                }
                {
                    icon === "faKhanda" && (

                        <FontAwesomeIcon icon={faKhanda} className={styles.icon}/>
                    )
                }
                                {
                    icon === "faWandSparkles" && (

                        <FontAwesomeIcon icon={faWandSparkles} className={styles.icon}/>
                    )
                }
                {
                    icon === "faDAndD" && (

                        <FontAwesomeIcon icon={faDAndD} className={styles.icon}/>
                    )
                }
                {
                    icon === "faStreetView" && (

                        <FontAwesomeIcon icon={faStreetView} className={styles.icon}/>
                    )
                }
                {
                    icon === "faPeopleGroup" && (

                        <FontAwesomeIcon icon={faPeopleGroup} className={styles.icon}/>
                    )
                }
                {
                    icon === "faGem" &&(

                        <FontAwesomeIcon icon={faGem} className={styles.icon}/>
                    )
                }

            </Link>
        </div>
    );
}

export default NavLink;