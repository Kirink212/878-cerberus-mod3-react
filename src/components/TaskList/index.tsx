import { useContext } from "react";
import { Accordion } from "react-bootstrap";
import { TaskContext } from "../../contexts/task.context";

import Task from "../../models/task.model";
import TaskDetails from "../TaskDetails";

function TaskList() {
  const { tasksList } = useContext(TaskContext);

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
