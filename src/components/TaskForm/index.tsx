import { useContext, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { TaskContext } from "../../contexts/task.context";
import Task from "../../models/task.model";
import { convertDateToFormat } from "../../utils/date";

interface TaskFormProps {
    isEdit?: boolean;
    task?: Task;
}

function TaskForm( { task, isEdit = false }: TaskFormProps) {

    // const [title, setTitle] = useState<string>(task?.title || '');
    // const [description, setDescription] = useState<string>(task?.description?? '');
    // const [dueDate, setDueDate] = useState<string>(convertDateToFormat(task?.dueDate)?? '');
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dueDateRef = useRef(null);
    const { createNewTask, editTask } = useContext(TaskContext);

    console.log("entrei aqui: TaskForm");

    function submitForm(){
        const title = titleRef.current? titleRef.current.value : "";
        const description = descriptionRef.current? descriptionRef.current.value : "";
        const dueDate = dueDateRef.current? dueDateRef.current.value : "";
        const formatDueDate: Date = new Date(dueDate.replaceAll('-', ','));

        if (isEdit)
            editTask?.( title, formatDueDate, description, task?.id );
        else {
            createNewTask?.( title, formatDueDate, description );
            clearForm();
        }
    }

    function clearForm(){
        if (titleRef.current)
            titleRef.current.value = "";
        if (descriptionRef.current)
            descriptionRef.current.value = "";
        if (dueDateRef.current)
            dueDateRef.current.value = "";

        // setTitle('')
        // setDescription('')
        // setDueDate('')
    }

    useEffect(() => {

    }, []);

    return <>
        { !isEdit && <h1>Create New Task</h1> }
        <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Título</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Informe o título"
                    ref={titleRef}
                    // value={title}
                    // onChange={(event) => setTitle(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Informe a descrição"
                    ref={descriptionRef}
                    // value={description}
                    // onChange={(event) => setDescription(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Data</Form.Label>
                <Form.Control
                    type="date"
                    ref={dueDateRef}
                    // value={dueDate}
                    // onChange={(event) => setDueDate(event.target.value)}
                />
            </Form.Group>

            {/* { !isEdit && <Button onClick={ submitForm }>Adicionar Tarefa</Button> } */}
            <Button onClick={ submitForm }> { isEdit? "Editar": "Adicionar" } Tarefa </Button>
        </Form>
    </>

}

export default TaskForm