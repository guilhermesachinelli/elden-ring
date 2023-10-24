import Link from "next/link";
import styles from './NavLink.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { faRing } from "@fortawesome/free-solid-svg-icons";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";

const NavLink = ({ rota, text, icon }) => {
    return (
        <div>
            <Link href={rota} className={styles.linkbtn}>
                {text}
                {icon === "faHouse" && (

                    <FontAwesomeIcon icon={faHouse} />
                )
                }
                {icon === "faShirt" && (

                    <FontAwesomeIcon icon={faShirt} />
                )
                }

                {icon === "faChessKing" && (

                    <FontAwesomeIcon icon={faChessKing} />
                )
                }
                {icon === "faMapLocationDot" && (

                    <FontAwesomeIcon icon={faMapLocationDot} />

                )
                }
                {icon === "faScroll" && (


                    <FontAwesomeIcon icon={faScroll} />
                )
                }
                {
                    icon === "faRing" && (

                        <FontAwesomeIcon icon={faRing} />
                    )
                }
                {
                    icon === "faSkullCrossbones" && (

                        <FontAwesomeIcon icon={faSkullCrossbones} />
                    )
                }
            </Link>
        </div>
    );
}

export default NavLink;