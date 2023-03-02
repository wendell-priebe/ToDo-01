import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { ToDo } from '../ToDo/ToDo';

import ClipboardSvg from '../../assets/clipboard.svg'
import styles from './Tasks.module.css';

export function Tasks() {

    const { tasks, setTasks } = useContext(TasksContext)

    function toDoConclused(): number {
        let tasksConclused = tasks.filter((task) => task.isChecked === true)
        return tasksConclused.length ;
    }

    function handleToggleTask(id: number){
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