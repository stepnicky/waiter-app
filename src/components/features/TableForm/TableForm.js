import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { getTableById, updateTableValues } from '../../../redux/tablesRedux';
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
import styles from './TableForm.module.scss';
import clsx from 'clsx';


const TableForm = (props) => {
    
    const id = props.id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tableData = useSelector(state => getTableById(state, id));
   
    const [ status, setStatus ] = useState(tableData.status);
    const [people, setPeople] = useState(tableData.people);
    const [maxPeople, setMaxPeople] = useState(tableData.maxPeople);
    const [bill, setBill] = useState(tableData.bill);

    useEffect(() => {
        if (people > maxPeople) {
            alert(`People amount can't be higher than ${maxPeople}!`);
            setPeople(maxPeople);
        } else if (people < 0) {
            setPeople(0);
        } else if (maxPeople < 0) {
            setMaxPeople(0);
        }
    }, [people, maxPeople]);

    useEffect(() => {
        if (status === 'Free' || status === 'Cleaning') {
            setPeople(0);
        } else if (status !== 'Busy') {
            setBill(0);
        }
    }, [status]);

    if(!tableData) {
        return <Navigate to="/" />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((status === 'Busy' || status === 'Reserved') && people === '0'){
            alert('Fill the people amount form!');
            return;
        }
        dispatch(updateTableValues({id, status, people, maxPeople, bill}));   
        navigate('/');
    };
    return (
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <span className={styles.span}><strong>Status: </strong></span>
                        <select 
                            className={styles.select}
                            type="select"
                            value={status} 
                            onChange={e => setStatus(e.target.value)} size='lg'>
                            <option>Free</option>
                            <option>Reserved</option>
                            <option>Cleaning</option>
                            <option>Busy</option>
                        </select>
                    </li>
                    <li>
                        <span className={clsx(styles.span)}><strong>People: </strong></span>
                        <input
                            type="number" 
                            value={people}
                            onChange={e => setPeople(e.target.value)}/><br className={styles.lineBreak} />
                        <span className={styles.dash}> / </span>
                        <input 
                            className={styles.max}
                            type="number"
                            value={maxPeople} 
                            onChange={e => setMaxPeople(e.target.value)}/>
                    </li>
                    <li className={clsx(status !== 'Busy' && styles.none)}>
                        <span className={styles.span}><strong> Bill: </strong></span>
                        <div className={styles.inputLast}>
                        $ <input 
                            type="number"
                            value={bill} 
                            onChange={e => setBill(e.target.value)}/>
                        </div>
                    </li>
                    <button className={clsx('mt-3', 'btn', 'btn-primary')}>Update</button>
                </ul>
            </form>
    );
};

export default TableForm;