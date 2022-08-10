import Task from "../../models/task.model";
import Accordion from "react-bootstrap/Accordion";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import TaskModal from "../TaskModal";

function TaskDetails(task: Task) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function changeCheckbox(): void {
    const id = task.id;
    task.changeStatus?.(id);
  }

    return ( <>
            <Accordion.Item eventKey={task.id.toString()}>
            <Accordion.Header>
                <Form.Check
                type="checkbox"
                label={task.title}
                onChange={changeCheckbox}
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
                show = { show }
                handleClose = {  handleClose }
                task = {  task }
            />
        </>
    )
}

export default TaskDetails;
