import styles from './InputAddToDo.module.css';
import Plus from '../../assets/plus.svg';
import { ChangeEvent, FormEvent, InvalidEvent, useContext } from 'react';
import { TasksContext } from './../../contexts/TasksContext';
import { useState } from 'react';

export function InputAddToDo(){
    const { tasks, setTasks } = useContext(TasksContext)
    const [textInput, setTextInput] = useState('')
    let newId = tasks.length + 1;
    const isNewCommentEmpty = textInput.length === 0; 

    function handleAddToDo(event: FormEvent){
        event.preventDefault()
        setTasks([...tasks, {id: newId, content: textInput, isChecked: false}]);
        setTextInput('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setTextInput(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity("Este campo é obrigatório!")
    }

    return (
        <form className={styles.container} onSubmit={handleAddToDo}>
            <input 
                value={textInput}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                className={styles.input} 
                placeholder="Adicione uma nova tarefa" 
            />
            <button 
                disabled={isNewCommentEmpty}
                className={styles.button} 
            >
                Criar
                <img src={Plus} />
            </button>
        </form>
    )
}