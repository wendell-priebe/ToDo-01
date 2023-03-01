import { Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import styles from './ToDo.module.css';

interface ToDoProps{
    id: number;
    content: string;
    isChecked: boolean;
    handleToggleTask: (id: number) => void;
    handleDeleteTask: (id: number) => void;
}

// export function ToDo({handleToggleTask, id, content, isChecked }: TaskProps) {
export function ToDo(props: ToDoProps) {
    const [textDecoration, setTextDecoration] = useState(false)

    useEffect(()=> {
        if(props.isChecked){
            setTextDecoration(true)
        } else {
            setTextDecoration(false)
        }
    },[props.isChecked])

    function handleTask(){
        setTextDecoration(!textDecoration)
        props.handleToggleTask(props.id)
    }

    return (
        <div className={styles.tasks}>
            <div className={styles.todo}>
                <div>
                {/* <div className={styles.round}> */}
                    <input
                        value={textDecoration}
                        type="checkbox"
                        id="checkbox"
                        // task_id={task.id}
                        defaultChecked={props.isChecked}
                        // {task.isChecked == true && checked} 
                        onClick={handleTask} 
                    />
                    <label htmlFor="checkbox"></label>
                </div>
            </div>
            {
                textDecoration
                ? <p className={styles.isChecked}>
                    {props.content}
                </p>
                : <p>
                    {props.content}
                </p>
            }
            <p
                className={styles.box_trash}
                onClick={() => props.handleDeleteTask(props.id)}
            >
                <Trash size={18} className={styles.trash} />
            </p>
        </div >
    )
}

