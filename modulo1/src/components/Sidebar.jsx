import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
            />

            <div className={styles.profile}>
                <img
                    className={styles.avatar} 
                    src="https://github.com/LourranFabricio.png"
                />
                <strong>Fabrício Lourran</strong>
                <span>Web Developer</span>
            </div>

            <footer className={styles.footer}>
                <a href="#" className={styles.hiperLink}>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}