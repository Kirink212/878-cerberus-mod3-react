import Task from "../../models/task.model";
import Accordion from "react-bootstrap/Accordion";
import { Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import TaskModal from "../TaskModal";
import { TaskContext } from "../../contexts/task.context";

function TaskDetails(task: Task) {
  const [show, setShow] = useState(false);
  const { changeStatus } = useContext(TaskContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return ( <>
            <Accordion.Item eventKey={task.id.toString()}>
            <Accordion.Header>
                <Form.Check
                type="checkbox"
                label={task.title}
                checked={task.status}
                onChange={() => changeStatus?.(task.id)}
                />
            </Accordion.Header>
            <Accordion.Body>
                <ul>
                <li>{task.dueDate.toLocaleDateString()}</li>
                <li>{task.description ?? "Empty Description"}</li>
                </ul>
                <Button onClick={handleShow}>Editar</Button>
            </Accordion.Body>
            </Accordion.Item>
            <TaskModal 
                // show = { show }
                // handleClose = { handleClose }
                // task = { task }
                {
                    ...{
                        show,
                        handleClose,
                        task
                    }
                }
                // abc = { "abc" } -> não posso fazer isso, pois não é compatível com a tipagem definida
            />
        </>
    )
}

export default TaskDetails;
