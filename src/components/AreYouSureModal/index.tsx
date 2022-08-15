import { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import HandleModal from '../../models/handleModal.model';
import { TaskContext } from '../../contexts/task.context';

function AreYouSureModal({ show, task, handleClose } : HandleModal) {
    const { removeTask } = useContext(TaskContext);

    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Confirmação de remoção
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Você tem certeza que deseja remover esta tarefa?
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Não
            </Button>
            <Button variant="danger" onClick={ () => removeTask?.(task?.id) }>
                Sim
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default AreYouSureModal;