import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import TaskForm from '../TaskForm';

import HandleModal from '../../models/handleModal.model';

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

