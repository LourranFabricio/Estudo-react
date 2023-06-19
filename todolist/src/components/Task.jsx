import { useState } from 'react'
import styles from './Task.module.css'

import {Trash, Check} from 'phosphor-react'


export function Task({content, onDeleteTask, onCompletedTask}){

    const [designButton, setDesignButton] = useState(true);
    const [designText, setDesignText] = useState(true);

    function handleDeleteTask(){
        onDeleteTask(content);
    }

    function handleCheck(){
        if(designButton) onCompletedTask(1);
        else onCompletedTask(-1);
        setDesignButton(!designButton);
        setDesignText(!designText);
    }

    return(
        <div className={styles.section}>
           <button
            className={designButton ? styles.btnCheck : styles.btnChecked}
            type='click'
            onClick={handleCheck}>
            
            {designButton ? <></> : <Check /> }

           </button>
           <textarea name="taskContent" id="textArea" cols="90" rows="3" className={designText ? styles.text : styles.textLineTrought}>
                {content}
           </textarea>
           <button type='click' className={styles.deleteButton} onClick={handleDeleteTask}> <Trash size={26}/> </button>
        </div>
    )
}