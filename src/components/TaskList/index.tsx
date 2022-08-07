import { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';

import Task from '../../models/task.model';
import TaskDetails from './TaskDetails';

function TaskList() {
    const [tasksList, setTasksList] = useState<Array<Task>>([
        {
            id: 1,
            title: "Passear com o cachorro",
            status: false,
            dueDate: new Date(2022, 8, 4)
        },
        {
            id: 2,
            title: "Limpar casa",
            status: false,
            dueDate: new Date(2022, 8, 4)
        },
        {
            id: 3,
            title: "Fazer o exerício que o Luís passou",
            status: false,
            dueDate: new Date(2022, 8, 4)
        }
    ]);

    function createNewTask() {
        const lastId = tasksList[tasksList.length - 1].id;
        console.log("Entrei aqui");

        // Este push não funfa!!!
        // tasksList.push({
        //     id: lastId + 1,
        //     title: "Tarefa teste",
        //     status: false,
        //     dueDate: new Date(2022, 8, 4)
        // });
        setTasksList([...tasksList, {
            id: lastId + 1,
            title: "Tarefa teste",
            status: false,
            dueDate: new Date(2022, 8, 4)
        }]);
    }

    function changeStatus(id: number) {
        const index = tasksList.findIndex((task) => task.id == id);

        tasksList[index].status = !tasksList[index].status;

        setTasksList(tasksList);
    }

    return <>
        <Accordion>
            {
                tasksList.map((task: Task) => <TaskDetails key={task.id} {...task} />)
                // [
                //   <li>Tarefa1</li>,
                //   <li>Tarefa2</li>,
                //   <li>Tarefa3</li>
                // ]
            }
        </Accordion>
    </>
}

export default TaskList;