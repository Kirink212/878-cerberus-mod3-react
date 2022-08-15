import Accordion from "react-bootstrap/Accordion";
import { Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";

import TaskModal from "../TaskModal";
import AreYouSureModal from "../AreYouSureModal";

import Task from "../../models/task.model";
import { TaskContext } from "../../contexts/task.context";

function TaskDetails(task: Task) {
    const { changeStatus } = useContext(TaskContext);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showRemove, setShowRemove] = useState(false);
    const handleCloseRemove = () => setShowRemove(false);
    const handleShowRemove = () => setShowRemove(true);

    // console.log("entrei aqui: TaskDetails");

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
                <Button onClick={handleShowEdit}>Editar</Button>
                <Button variant="danger" onClick={handleShowRemove}>Remover</Button>
            </Accordion.Body>
            </Accordion.Item>
            <TaskModal 
                {
                    ...{
                        show: showEdit,
                        handleClose: handleCloseEdit,
                        task
                    }
                }
                // abc = { "abc" } -> não posso fazer isso, pois não é compatível com a tipagem definida
            />
            <AreYouSureModal 
                show = { showRemove }
                handleClose = { handleCloseRemove }
                task = { task }
            />
            {/* Criar o componente referente ao modal de deleção (Are you sure?) */}
        </>
    )
}

export default TaskDetails;
