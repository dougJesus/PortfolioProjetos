import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/nav'

function Navbar(){
    return (
        <div className={styles.navbar}>
            <ul>
            <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.google.com'><FaInstagram size={30}></FaInstagram></a></li>
                <li><a href='https://www.globo.com'><FaLinkedin size={30}></FaLinkedin></a></li>
                <li><a href='https://www.outlook.com'><FaGithub size={30}></FaGithub></a></li>
            </ul>
        </div>
    )
}
export default Navbar