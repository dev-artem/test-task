import React from 'react';
import './Table.scss';

export const Table = ({ data }) => {
    const arr = data.map((item) => {
        return (
            <tr key={item._id || item.id}>
                <td>{item.date_created}</td>
                <td>{item.number}</td>
                <td>{item.date_supplied}</td>
                <td>{item.comment}</td>
            </tr>
        );
    });
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Create</th>
                    <th>No</th>
                    <th>Supply</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>{arr}</tbody>
        </table>
    );
};
