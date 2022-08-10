import { useState } from "react";
import { Accordion } from "react-bootstrap";

import Task from "../../models/task.model";
import TaskDetails from "../TaskDetails";
import TaskForm from "../TaskForm";

function TaskList() {
    const [tasksList, setTasksList] = useState<Array<Task>>([
      {
        id: 1,
        title: "passear com o chorro",
        status: false,
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

  function createNewTask( 
    title: string, 
    dueDate: Date, 
    description: string 
    ): void {

    const lastId = tasksList[tasksList.length - 1].id

    setTasksList([...tasksList, {
      id: lastId + 1,
      title,
      status: false,
      dueDate,
      description
    }])

  }

  function changeStatus(id: number){
      const index = tasksList.findIndex((task) => task.id === id)

      tasksList[index].status = !tasksList[index].status

      setTasksList(tasksList)
  }

  function editTask(
    id: number,
    title: string, dueDate:
    Date, description: string){

    const index = tasksList.findIndex((task) => task.id === id)

    tasksList[index] = {
      id,
      title,
      status: tasksList[index].status,
      dueDate,
      description
    }

    setTasksList(tasksList)
  }

  return (
    <>
      <TaskForm 
        {...{inputTask: createNewTask}}
      />
      <Accordion>
        {
          tasksList.map((task: Task) => 
            <TaskDetails 
              key={task.id}
              {...task}
              changeStatus={changeStatus} 
            />
          )
        }
      </Accordion>
    </>
  );
}

export default TaskList;
