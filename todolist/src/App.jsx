import { Header } from "./components/Header"
import { CreateTask } from "./components/CreateTask"

import styles from './App.module.css'

export function App() {

  return (
    <div className={styles.div}>
      <Header/>
      <CreateTask/>
    </div>
  )
}
