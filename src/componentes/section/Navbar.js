import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
function Navbar(){
    return (
        <div className={styles.navbar}>
            <ul>
                <li>Apresentação</li>
                <li>Habilidades</li>
                <li>Projetos</li>
            </ul>
            <ul>
                <li><FaInstagram size={30}></FaInstagram></li>
                <li><FaLinkedin size={30}></FaLinkedin></li>
                <li><FaGithub size={30}></FaGithub></li>
            </ul>
        </div>
    )
}
export default Navbar