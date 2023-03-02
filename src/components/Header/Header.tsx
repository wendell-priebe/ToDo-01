import { InputAddToDo } from '../InputAddToDo/InputAddToDo';

import styles from './Header.module.css';
import Foguete from '../../assets/rocket.svg'

export function Header(){


    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={Foguete} className={styles.foguete} />
                <span>to</span>
                <span>do</span>
            </div>

            <InputAddToDo />

        </div>
    )
}