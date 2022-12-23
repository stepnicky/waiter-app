import { addNewTable } from "../../../redux/tablesRedux";
import { getAllTables } from "../../../redux/tablesRedux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import clsx from 'clsx';
import styles from './AddTable.module.scss';

const AddTable = () => {

    const dispatch = useDispatch();

    const tables = useSelector(getAllTables);

    let tableIds = [];
    for(let table of tables){
        tableIds.push(Number(table.id));
    }
    
    const highestId = Math.max(...tableIds);

    let missingNum = [];
    for(let i = 1; i <= highestId; i++){
        if(tableIds.indexOf(i) === -1){
            missingNum.push(i)
        }
    }

    let tableId = highestId + 1;
    if (missingNum.length !== 0) {
        tableId = Math.min(...missingNum);
    } else if (tableIds.length === 0) {
        tableId = 1;
    }
    const createTable = (e) => {
        e.preventDefault();
        const initialData = {
            id: tableId.toString(),
            status: 'Free',
            people: 0,
            maxPeople: 4,
            bill: 0
        };
        dispatch(addNewTable(initialData));
    };

    return (
        <div className={styles.buttonWrapper}>
            <button className={clsx(styles.button, 'btn', 'btn-outline-primary')} onClick={createTable}>Add table</button>
        </div>
    );
};

export default AddTable;