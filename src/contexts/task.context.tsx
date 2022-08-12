// import { TaskContext } from './task.context';
import { createContext, useState } from "react";
import Task from "../models/task.model";

interface TaskContextProps {
    // Attributes
    tasksList?: Array<Task>;

    // Methods
    changeStatus?: (id: number) => void;
    editTask?: (title: string, dueDate: Date, description: string, id?: number) => void;
    createNewTask?: (title: string, dueDate: Date, description: string) => void;
}

export const TaskContext = createContext<TaskContextProps>({});

export function TaskProvider ( { children }: { children: JSX.Element[] | JSX.Element } ) {
    const [tasksList, setTasksList] = useState<Array<Task>>([
        {
            id: 1,
            title: "passear com o chorro",
            status: true,
            dueDate: new Date(2022, 8, 4),
            description: 'ir com ele até a padaria e voltar'
        },
        {
            id: 2,
            title: "limpar a casa",
            status: false,
            dueDate: new Date(2022, 8, 4),
        },
    ])
  
    function createNewTask( title: string, dueDate: Date, description: string ): void {
      const lastId = tasksList[tasksList.length - 1].id;
  
      console.log("entrei");

      setTasksList([...tasksList, {
        id: lastId + 1,
        title,
        status: false,
        dueDate,
        description
      }]);
    }
  
    function changeStatus(id: number){
      const index = tasksList.findIndex((task) => task.id === id);
  
      tasksList[index].status = !tasksList[index].status;
  
      setTasksList([...tasksList]);
    }
  
    function editTask(title: string, dueDate: Date, description: string, id?: number) {
      const index = tasksList.findIndex((task) => task.id === id)

      tasksList[index].title = title;
      tasksList[index].dueDate = dueDate;
      tasksList[index].description = description;
  
      setTasksList([...tasksList]);
    }

    return <TaskContext.Provider value={ {tasksList, createNewTask, editTask, changeStatus} }>
      {children}
    </TaskContext.Provider>
}