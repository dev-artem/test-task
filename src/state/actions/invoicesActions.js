import axios from 'axios';
import { invoicesTypes } from '../action-types';

const _URL = 'http://localhost:3001/invoices';

export const getInvoices = () => {
    return async (dispatch) => {
        dispatch({ type: invoicesTypes.GET_INVOICES });
        try {
            const { data } = await axios.get(_URL);
            dispatch({
                type: invoicesTypes.GET_INVOICES_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: invoicesTypes.GET_INVOICES_ERROR,
                payload: error.message,
            });
        }
    };
};

export const addInvoice = (invoice) => {
    return async (dispatch) => {
        dispatch({ type: invoicesTypes.ADD_INVOICE });
        try {
            const { data } = await axios.post(_URL, invoice);
            dispatch({
                type: invoicesTypes.ADD_INVOICE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: invoicesTypes.ADD_INVOICE_ERROR,
                payload: error.message,
            });
        }
    };
};
