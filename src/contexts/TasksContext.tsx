import { createContext, useState } from "react";
import { TaskProps } from '../../src/types';


interface ContextProps {
    tasks: TaskProps[];
    setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

export const TasksContext = createContext<ContextProps>({} as ContextProps)

export function TasksProvider({ children }:any ){
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

    return(
        <TasksContext.Provider 
            value={{ tasks, setTasks }}
        >
            { children }
        </TasksContext.Provider>
    )
}