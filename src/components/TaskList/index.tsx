import React from 'react';
import Task from '../../models/task.model';

function TaskList() {
    const tasksList: Array<Task> = [
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
    ];

    return <ul>
        {
            tasksList.map((task: Task) => <li> { task.title } </li>)
            // [
            //   <li>Tarefa1</li>,
            //   <li>Tarefa2</li>,
            //   <li>Tarefa3</li>
            // ]
        }
    </ul>;
}

export default TaskList;