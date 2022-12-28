import { API_URL } from "../config";

//selectors
export const getAllTables = state => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId); 

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE = createActionName('UPDATE');
const ADD_TABLE = createActionName('ADD_TABLE');
const DELETE_TABLE = createActionName('DELETE_TABLE');

// action creators
export const updateTables = payload => ({type: UPDATE_TABLES, payload});
export const update = payload => ({type: UPDATE, payload});
export const addTable = payload => ({type: ADD_TABLE, payload});
export const deleteTable = payload => ({type: DELETE_TABLE, payload});

export const fetchTables = (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then(res => res.json())
      .then(tables => {
        dispatch(updateTables(tables));
      });
};

export const updateTableValues = (newValues) => {
    return (dispatch) => {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...newValues})
      };
      fetch(`${API_URL}/tables/${newValues.id}`, options)
        .then(() => dispatch(update(newValues)));
    };
};

export const addNewTable = (newTable) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTable)
    };
    fetch(`${API_URL}/tables`, options)
      .then(() => dispatch(addTable(newTable)));
  };
};

export const removeTable = (tableId) => {
  return (dispatch) => {
    fetch(`${API_URL}/tables/${tableId}`, { method: 'DELETE' })
      .then(() => dispatch(deleteTable(tableId)));
  }
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case UPDATE:
      return statePart.map(table => 
        table.id === action.payload.id ? { ...table, ...action.payload} : table);
    case ADD_TABLE:
      return [...statePart, ...action.payload];
    case DELETE_TABLE:
      return statePart.filter(table => table.id !== action.payload);
    default:
      return statePart;
  };
};
export default tablesReducer;