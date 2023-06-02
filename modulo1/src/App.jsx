import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author='Diego Fernandes'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum cum eaque placeat corporis recusandae earum cumque repellat non rerum repellendus sapiente necessitatibus, quia consequuntur voluptates. Libero veniam beatae aliquid?'
          />  
          <Post 
            author='Marcelo'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          /> 
        </main>
      </div>
    </>
  )
}
export default App
