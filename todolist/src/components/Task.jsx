import { useState } from 'react'
import styles from './Task.module.css'

import {Trash} from 'phosphor-react'


export function Task({content}){

    const [classe, setClasse] = useState('btnCheck')
    function handleCheck(){
        setClasse('btnChecked');
    }

    return(
        <div className={styles.section}>
           <button
           className={classe}
           type='click'
           onClick={handleCheck}>
           

           </button>
           <textarea name="taskContent" id="textArea" cols="90" rows="3">
                {content}
           </textarea>
           <button type='click' className={styles.deleteButton}> <Trash size={26}/> </button>
        </div>
    )
}