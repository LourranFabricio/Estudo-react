import styles from './Header.module.css' //Gera um "id" aleátorio para evitar conflito de estilização
import ignitLogo from '../assets/ignite-logo.svg'

export function Header(){
    return(
        <header className={styles.header}> 
            <img src={ignitLogo} alt="Logotipo do Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}