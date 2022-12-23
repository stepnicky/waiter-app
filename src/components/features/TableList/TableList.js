import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTables } from "../../../redux/tablesRedux";
import clsx from 'clsx';
import styles from './TableList.module.scss';


const TableList = () => {

    const tables = useSelector(getAllTables).sort((a, b) => a.id - b.id);

    return (
        <div>
            <h1><strong>All tables</strong></h1>
            <div className={clsx(styles.allTables)}>
            {tables.map(table => 
                <div className={clsx(styles.table)} key={table.id}>
                    <div className={clsx(styles.id)}><h2 className={clsx('m-2')}>Table {table.id}</h2></div>
                    <div className={clsx(styles.status)}><span><strong>Status: </strong>{table.status}</span></div>
                    <div className={clsx(styles.buttonWrapper)}><Button className={styles.button} as={Link} to={`/table/${table.id}`}>Show more</Button></div> 
                </div>
            )}
            </div>
        </div>
    );
};

export default TableList;