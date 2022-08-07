import Task from "../../../models/task.model";
import Accordion from 'react-bootstrap/Accordion';
import { Form } from "react-bootstrap";

function TaskDetails({ id, title, dueDate, description} : Task) {
    // return <li key={ id }> { title ?? "Tarefa X" } </li>;

    return <Accordion.Item eventKey={ id.toString() }>
        <Accordion.Header>
            <Form.Check type="checkbox" label={ title } />
        </Accordion.Header>
        <Accordion.Body>
            <ul>
                <li>{ dueDate.toLocaleDateString() }</li>
                <li>{ 
                    description?? `
                        Mussum Ipsum, cacilds vidis litro abertis.
                        Sapien in monti palavris qui num significa nadis i pareci latim.
                        Mé faiz elementum girarzis, nisi eros vermeio.
                        Aenean aliquam molestie leo, vitae iaculis nisl.
                        Quem num gosta di mim que vai caçá sua turmis!
                    ` 
                }</li>
            </ul>
        </Accordion.Body>
    </Accordion.Item>
}

export default TaskDetails;