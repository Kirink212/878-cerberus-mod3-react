import { Button, Form } from "react-bootstrap";

function TaskForm() {
    return <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Título</Form.Label>
        <Form.Control type="text" placeholder="Informe o título" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      {/* <Button onClick={createNewTask}>Adicionar Tarefa</Button> */}
    </Form>;
}

export default TaskForm;