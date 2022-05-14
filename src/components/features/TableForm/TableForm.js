import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTableById } from '../../../redux/tablesRedux';
import { Navigate } from 'react-router-dom';


const TableForm = () => {
    
    const { id } = useParams();
    const tableData = useSelector(state => getTableById(state, id));
    
    const [ status, setStatus ] = useState(tableData.status);
    
    if(!tableData) {
        return <Navigate to="/" />
    }
    return (
        <Form>
            <h1>Table {tableData.id}</h1>
            <Form.Group className="mb-3" controlId="statusForm">
                <Form.Label>Status</Form.Label>
                <Form.Select 
                    defaultValue={status} onChange={e => setStatus(e.target.value)} size='lg'
                >
                    <option value="free">Free</option>
                    <option value="reserved">Reserved</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="busy">Busy</option>
                </Form.Select>
            </Form.Group>
            <p><strong>People: </strong>{tableData.peopleAmount} / {tableData.maxPeopleAmount}</p>
            <p><strong>Bill: </strong> ${tableData.bill}</p>
            <Button>Update</Button>
        </Form>
    );
};

export default TableForm;