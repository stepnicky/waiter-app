import TableForm from  '../../features/TableForm/TableForm'
import { useParams } from 'react-router-dom';
import RemoveTable from '../../features/RemoveTable/RemoveTable';
import styles from './SingleTable.module.scss';

const SingleTable = () => {

    const { id } = useParams();

    return (
        <div className={styles.singleTable}>
            <div className={styles.title}>
                <h1>Table {id}</h1>
            </div>
            <div className={styles.tableForm}>
                <TableForm id={id} />
            </div>
            <div className={styles.removeTable}>
                <RemoveTable tableId={id} />
            </div>
        </div>
    );
};

export default SingleTable;