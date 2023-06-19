import styles from './Header.module.css'
import rocket from '../assets/rocket.svg'


export function Header(){
    return(
        <header className={styles.header}>
            <div>
                <img src={rocket}alt="icone foguete" />
                <h2 className={styles.title}>
                    <span>to</span>
                    <span>do</span>
                </h2>
            </div>
        </header>
    )
}