import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCategories(props) {
  const { setAddCategories, setShow, show, addCategory } = useState();
  

  const handleClose = () => setShow(false);

  return (
    <>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>הוספת תחום לימוד</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            id="newCategory"
            type="text"
            onChange={(e) => setAddCategories(e.target.value)}
          />
          <i className="bi bi-trash"></i>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCategories;
