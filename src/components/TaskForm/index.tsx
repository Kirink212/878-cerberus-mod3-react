import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function TaskForm( { inputTask }:
    {inputTask:
        (title: string, duaDate: Date, description: string) => void
    }) {

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [dueDate, setDueDate] = useState<string>('')

    function submitForm(){

        const formatDueDate: Date = new Date(dueDate.replaceAll('-', ','))
        inputTask( title, formatDueDate, description )
        clearForm()
        
 
    }

    function clearForm(){

        setTitle('')
        setDescription('')
        setDueDate('')
    }


    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control
                type="text"
                placeholder="Informe o título"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
                type="text"
                placeholder="Informe a descrição"
                value={description}
                onChange={(event) => setDescription(event.target.value)}

            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Data</Form.Label>
            <Form.Control
                type="date"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
            />
        </Form.Group>

        <Button onClick={ submitForm }>
            Adicionar Tarefa
        </Button>
        </Form>
    )

}

export default TaskForm