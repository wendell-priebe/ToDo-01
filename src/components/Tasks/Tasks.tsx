import styles from './Tasks.module.css';
import ClipboardSvg from '../../assets/clipboard.svg'
import { Trash } from 'phosphor-react';

import Trashss from '../../assets/trash.svg'
const tasks = [
    {
        id: 1,
        content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
        isChecked: false
    }, {
        id: 2,
        content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
        isChecked: false
    }, {
        id: 3,
        content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
        isChecked: true
    }
]

export function Tasks() {
    return (
        <div className={styles.container}>
            <div className={styles.count_tarefas}>
                <div className={styles.criadas}>
                    <p>Tarefas criadas </p>
                    <span>0</span>
                </div>
                <div className={styles.concluidas}>
                    <p>Concluídas</p>
                    <span>2 de 5</span>
                </div>
            </div>
            <div className={styles.content_tasks}>
                {/* <div className={styles.tasks_0}>
                    <img src={ClipboardSvg} />
                    <p>
                        Você ainda não tem tarefas cadastradas
                    </p>
                    <p>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div> */}

                {
                    tasks.map(task => {
                        return (
                            <div className={styles.tasks}>
                                <div className={styles.todo}>
                                    <div className={styles.round}>
                                        <input type="checkbox" id="checkbox" checked={task.isChecked} />
                                        <label htmlFor="checkbox"></label>
                                    </div>
                                </div>
                                <p>
                                    {task.content}
                                </p>
                                <button>
                                    <Trash size={18} className={styles.trash} />
                                </button>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}