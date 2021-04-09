import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../state';
import './Form.scss';

const formatDate = (date) => {
    return date.split('-').reverse().join('-');
};

export const Form = () => {
    const history = useHistory();
    const [num, setNum] = useState('');
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.invoices);

    const onChangeHandler = (e) => {
        if (e.target.value.length > 160) {
            alert('Text field, should have no more than 160 characters');
            return;
        }
        setComment(e.target.value);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (num.length < 3) {
            alert('Text field that should have at least 3 symbols');
            return;
        }
        const { addInvoice } = actions.invoicesActions;
        const invoice = {
            id: nanoid(),
            number: num,
            date_created: formatDate(e.target.date.value),
            date_supplied: formatDate(e.target.supply_date.value),
            comment: comment,
        };
        await dispatch(addInvoice(invoice));
        if (!error && !loading) {
            history.push('/');
        }
    };

    return (
        <>
            {loading && <div>Loading</div>}
            {error && <div>{error}</div>}
            {!loading && !error && (
                <form className="form" onSubmit={onSubmitHandler}>
                    <div className="form__field">
                        <label>Number:</label>
                        <input
                            type="text"
                            name="number"
                            value={num}
                            onChange={(e) => setNum(e.target.value)}
                        />
                    </div>
                    <div className="form__field">
                        <label>Invoice Date:</label>
                        <input type="date" name="date" />
                    </div>
                    <div className="form__field">
                        <label>Supply Date:</label>
                        <input type="date" name="supply_date" />
                    </div>
                    <div className="form__field form__field_fz">
                        <label>Comment:</label>
                        <textarea
                            name="comment"
                            value={comment}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="form__field form__field-btn">
                        <button className="btn" type="submit">
                            Save
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};
