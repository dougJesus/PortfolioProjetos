import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import styles from './Footer.module.css'


function Footer (){
    return (
        <div className={styles.footer}>
             <ul>
                <li><a href='https://www.google.com' target='blank'><FaInstagram size={30}></FaInstagram></a></li>
                <li><a href='https://www.globo.com' target='blank'><FaLinkedin size={30}></FaLinkedin></a></li>
                <li><a href='https://www.outlook.com' target='blank'><FaGithub size={30}></FaGithub></a></li>
            </ul>
            <p>teste@outlook.com.br</p>
            <p>Douglas de Jesus ₢ 2023</p>
        </div>
    )
}
export default Footer