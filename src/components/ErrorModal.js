import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ErrorModal({message, name, onConfirm, showModal}) {
    

  return (
    <Modal show={showModal} onHide={onConfirm}>
    <Modal.Header closeButton>
      <Modal.Title>{ name }</Modal.Title>
    </Modal.Header>
    <Modal.Body>{ message }</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onConfirm}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  );
}