import { combineReducers } from 'redux';
import invoicesReducer from './invoicesReducer';

const reducers = combineReducers({
    invoices: invoicesReducer,
});

export default reducers;
