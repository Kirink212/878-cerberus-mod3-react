import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Task from '../../models/task.model';
import TaskForm from '../TaskForm';

interface HandleModal {
    handleClose: () => void
    show: boolean
    task: Task
}

function TaskModal({ show, task, handleClose } : HandleModal) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Editar Tarefa
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <TaskForm
              inputTask = { task.editTask }
              isEdit = { true }
              task = { task }
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          {/* <Button variant="primary" onClick={saveEdit}>
            Salvar
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskModal

