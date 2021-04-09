import React from 'react';
import './Table.scss';

export const Table = () => {
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
            <tbody>
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
            </tbody>
        </table>
    );
};
