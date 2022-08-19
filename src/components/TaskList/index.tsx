import { useContext, useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import { TaskContext } from "../../contexts/task.context";

import Task from "../../models/task.model";
import TaskDetails from "../TaskDetails";

function TaskList() {
  const { tasksList } = useContext(TaskContext);
  let showMessage = useRef(true);

  // Este cara roda toda vez que este componente for criado (diferente de re-renderizado)
  useEffect(() => {
    // let currentDate = new Date();

    // console.log("Entrei no useEffect com lista de dependências VAZIA");
    setInterval(() => {
      const intervalDate = new Date();
      const filteredTasks = tasksList?.filter((task) => {
        // const dueDate = task.dueDate.toISOString();
        // const dateNow = (new Date()).toISOString();
        // return dateNow > dueDate && !task.status;
        return intervalDate > task.dueDate && !task.status;
      });
      
      // Caso estivéssemos lidando só com datas
      // console.log(intervalDate, currentDate);
      // if (intervalDate > currentDate) {
      //   currentDate = intervalDate;
      //   showMessage = true;
      // }

      if (showMessage.current && filteredTasks?.length) {
        const message = filteredTasks?.reduce((prev, curr) => prev + `-> ${curr.title}`, "Tarefas que estão atrasadas:\n\n");
        alert(message);
        showMessage.current = false;
      }
    }, 1000);
  }, []);

  // Este cara roda toda vez que este componente for re-renderizado/atualizado
  useEffect(() => {
    // console.log("Entrei no useEffect sem lista de dependências");
  });

  useEffect(() => {
    localStorage.setItem("tasksList", JSON.stringify(tasksList));

    fetch("http://localhost:3000", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tasksList)
    }).then((obj) => {
      console.log(obj);
    });

    showMessage.current = true;
  }, [tasksList]);

  // console.log("entrei aqui: TaskList");
  // showMessage.current = true;

  return <>
    <h1>Todo List App</h1>
    <Accordion>
      {
        tasksList?.map((task: Task) => 
          <TaskDetails 
            key={task.id}
            {...task}
          />
        )
      }
    </Accordion>
  </>
}

export default TaskList;
