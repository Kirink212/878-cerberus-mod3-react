import { Button } from 'react-bootstrap';
import styled, { css } from 'styled-components';

interface TaskStatusLabelProps {
    status: boolean;
    dueDate: Date;
} 

const TaskStatusLabel = styled.span<TaskStatusLabelProps>`
    margin-left: 20px;
    font-family: 'comic-sans';
    font-size: 20px;

    ${props => props.status && css`text-decoration: line-through;`}
    ${props => props.dueDate < new Date() && !props.status && css`color: red;`}
`;

export const PurpleButton = styled(Button)`
    background-color: purple;
`;

export default TaskStatusLabel;