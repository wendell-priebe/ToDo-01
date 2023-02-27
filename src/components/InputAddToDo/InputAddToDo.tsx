import styles from './InputAddToDo.module.css';
import Plus from '../../assets/plus.svg';

export function InputAddToDo(){
    function handleAddToDo(){
        event.preventDefault();
        console.log('add todo')
    }

    return (
        <form className={styles.container} onSubmit={handleAddToDo}>
            <input className={styles.input} placeholder="Adicione uma nova tarefa" />
            <button className={styles.button} >
                Criar
                <img src={Plus} />
            </button>
        </form>
    )
}