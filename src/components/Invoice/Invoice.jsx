import React from 'react';
import { PageTitle } from '../PageTitle';
import './Invoice.scss';

export const Invoice = () => {
    return (
        <section className="invoice">
            <div className="invoice__title">
                <PageTitle title="Create Invoice" />
            </div>
            <div className="invoice__form"></div>
        </section>
    );
};
