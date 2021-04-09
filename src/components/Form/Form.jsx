import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Form.scss';

const formatDate = (date) => {
    return date.split('-').reverse().join('-');
};

export const Form = () => {
    const history = useHistory();
    const [num, setNum] = useState('');
    const [comment, setComment] = useState('');

    const onChangeHandler = (e) => {
        if (e.target.value.length > 160) {
            alert('Text field, should have no more than 160 characters');
            return;
        }
        setComment(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (num.length < 3) {
            alert('Text field that should have at least 3 symbols');
            return;
        }
        const invoice = {
            number: num,
            date_created: formatDate(e.target.date.value),
            date_supplied: formatDate(e.target.supply_date.value),
            comment: comment,
        };
        history.push('/');
    };

    return (
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
    );
};
