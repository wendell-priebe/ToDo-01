import styles from './Tasks.module.css';
import ClipboardSvg from '../../assets/clipboard.svg'
import { useState } from 'react';
import { ToDo } from '../ToDo/ToDo';


export interface TaskProps{
    id: number
    content: string
    isChecked: boolean
}

export function Tasks() {
    const [tasks, setTasks] = useState<TaskProps[]>([
        {
            id: 1,
            content: "Comprar carro.",
            isChecked: false
        }, {
            id: 2,
            content: "Fazer tarefas de limpeza.",
            isChecked: false
        }, {
            id: 3,
            content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isChecked: true
        }, {
            id: 4,
            content: "Construir um foguete e ir a lua.",
            isChecked: true
        }
    ])

    function toDoConclused(): number {
        let tasksConclused = tasks.filter((task) => task.isChecked === true)
        return tasksConclused.length ;
    }

    function handleToggleTask(id: number): any{
        let toggleTask = tasks.map(task => {
            if(id === task.id){
                return {...task, isChecked: !task.isChecked}
            } else {
                return task;
            }
        })
        setTasks(toggleTask)
    }

    function handleDeleteTask(id: number){
        const delTask = tasks.filter(task => {
            return task.id !== id;
        })
        setTasks(delTask)
    }

    return (
        <div className={styles.container}>
            <div className={styles.count_tarefas}>
                <div className={styles.criadas}>
                    <p>Tarefas criadas </p>
                    <span>{tasks.length}</span>
                </div>
                <div className={styles.concluidas}>
                    <p>Concluídas</p>
                    <span>
                        {toDoConclused()}
                        {
                            tasks.length > 0 &&
                            <div>
                                <p>de{' '}</p>
                                <p>{tasks.length}</p>
                            </div>
                        }
                    </span>
                </div>
            </div>
            <div className={styles.content_tasks}>
                {
                    tasks.length > 0 &&
                    tasks.map(task => {
                        return (
                         <ToDo 
                            key={task.id} 
                            id={task.id} 
                            content={task.content} 
                            isChecked={task.isChecked}
                            handleToggleTask={handleToggleTask} 
                            handleDeleteTask={handleDeleteTask}
                         />
                        )
                    })
                }
                {
                    tasks.length === 0 &&
                    <div className={styles.tasks_0}>
                        <img src={ClipboardSvg} />
                        <p>
                            Você ainda não tem tarefas cadastradas
                        </p>
                        <p>
                            Crie tarefas e organize seus itens a fazer
                        </p>
                    </div>
                }

            </div>

        </div >
    )
}