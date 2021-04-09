import React from 'react';
import './Table.scss';

export const Table = () => {
    return (
        <table className="table">
            <tr className="table__header">
                <th>Create</th>
                <th>No</th>
                <th>Supply</th>
                <th>Comment</th>
            </tr>
            <tr>
                <td>20-03-2018</td>
                <td>INV-000001</td>
                <td>20-03-2018</td>
                <td>Test invoice</td>
            </tr>
            <tr>
                <td>20-03-2018</td>
                <td>INV-000001</td>
                <td>20-03-2018</td>
                <td>Test invoice</td>
            </tr>
        </table>
    );
};
