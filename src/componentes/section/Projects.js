
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import portfolio from '../../image/projects/portfolio.svg'
import ButtonB from '../elements/ButtonB'

function Projects (){
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card
            img={lpdnc}
            title= "LP DNC"
            tech= "HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
            repo="https://www.google.com"
            site="https://www.google.com"
            />
            <Card
            img={portfolio}
            title= "LP DNC"
            tech= "HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
            repo="https://www.google.com"
            site="https://www.google.com"
            />
            <ButtonB text='Acesse meu repositorio'/>
        </div>
    )
}
export default Projects