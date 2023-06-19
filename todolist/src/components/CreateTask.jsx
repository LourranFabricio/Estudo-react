import {PlusCircle} from 'phosphor-react'

import styles from'./CreateTask.module.css'
import ClipBoard from '../assets/Clipboard.svg'

import { useState } from 'react'
import { Task } from './Task'

let display = true;

export function CreateTask(){
    const [text, setText] = useState('');
    const [arrayTask, setArrayTask] = useState([]);
    const [counter, setCounter] = useState(0);
    const [completedCounter, setCompletedTask] = useState(0);

    function handleSubmit(event){
        event.preventDefault();
        const newArray = [...arrayTask, text];
        setArrayTask(newArray);
        setCounter(counter+1);
        setText(''); //Limpa o input
        if(counter >=0) display = false;
        else display = true;
    }

    function deleteTask(taskToDelete){
        const taskWithoutDeleteOne = arrayTask.filter(task =>{
            return task != taskToDelete;
        })
        setArrayTask(taskWithoutDeleteOne);
        setCounter(counter-1); // Altera o valor das tarefas criadas
    }

    function completedTask(value){
        setCompletedTask(completedCounter+value);
    }


    return(
        <div className={styles.divFather}>
            <form action="#" className={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa'
                    className={styles.input}
                    onChange={(event) => setText(event.target.value)}
                    value={text}
                    />
                <button type="submit" className={styles.button} >
                    <span>Criar</span>
                    <PlusCircle size={22}/> 
                </button>
            </form>

        <section className={styles.section}>
        <header className={styles.header}>
            <span className={styles.span}>
                Tarefas criadas
                <div className={styles.containerCount}>{counter}</div>
            </span>
            <span className={styles.span}>
                Concluídas
                <div className={styles.containerCount}>{completedCounter} {'    '} de {'    '} {counter} </div>
            </span>
        </header>
        <div className={counter > 0 ? styles.containerTask : styles.containerWihoutTask}>
            {display && 
                <div className={styles.conditionContainer}>
                <img src={ClipBoard} alt="Clipboard" />
                <span className={styles.text}>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                </span>
                </div>
            }
            {
                arrayTask.map(task =>{
                    return(
                        <Task
                            key={task}
                            content={task}
                            onDeleteTask={deleteTask}
                            onCompletedTask={completedTask}
                        />
                    )
                })
            }
        </div>
        </section>
    </div>
    )
}