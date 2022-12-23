import { removeTable } from "../../../redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import clsx from 'clsx';


const RemoveTable = (props) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(removeTable(props.tableId));
        navigate('/');
    }
    return (
        <div>
            <button className={clsx('btn', 'btn-outline-danger')} onClick={handleShow}>Remove table</button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The operation will completely remove this table from the app.
                    Are you sure you want to do that?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant='danger' onClick={handleRemove}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default RemoveTable;