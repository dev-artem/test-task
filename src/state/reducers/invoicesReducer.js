import { invoicesTypes } from '../action-types';

const initialState = {
    loading: true,
    data: [],
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case invoicesTypes.GET_INVOICES: {
            return {
                loading: true,
                data: [],
                error: null,
            };
        }
        case invoicesTypes.GET_INVOICES_SUCCESS: {
            return {
                loading: false,
                data: action.payload,
                error: null,
            };
        }
        case invoicesTypes.GET_INVOICES_ERROR: {
            return {
                loading: false,
                data: [],
                error: action.payload,
            };
        }
        case invoicesTypes.ADD_INVOICE: {
            return {
                loading: true,
                data: [],
                error: null,
            };
        }
        case invoicesTypes.ADD_INVOICE_SUCCESS: {
            return {
                loading: false,
                data: [...state.data, action.payload],
                error: null,
            };
        }
        case invoicesTypes.ADD_INVOICE_ERROR: {
            return {
                loading: false,
                data: state.data,
                error: action.payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;
