import { useContext, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { TaskContext } from "../../contexts/task.context";

import Task from "../../models/task.model";
import TaskDetails from "../TaskDetails";

function TaskList() {
  const { tasksList } = useContext(TaskContext);

  // Este cara roda toda vez que este componente foi criado (diferente de re-renderizado)
  useEffect(() => {
    console.log("Entrei no useEffect com lista de dependências VAZIA");
  }, []);

  // Este cara roda toda vez que este componente for re-renderizado/atualizado
  useEffect(() => {
    console.log("Entrei no useEffect sem lista de dependências");
  });

  console.log("entrei aqui: TaskList");

  useEffect(() => {
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
  }, [tasksList]);

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
