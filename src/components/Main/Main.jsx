import React, { useEffect } from 'react';
import { PageTitle } from '../PageTitle';
import { Link } from 'react-router-dom';
import { Table } from '../Table';
import { PageSection } from '../PageSection';
import { useActions } from '../../hooks/useActions';
import { useSelector } from 'react-redux';

import { actions } from '../../state';

import './Main.scss';

export const Main = () => {
    const { loading, error, data } = useSelector((state) => state.invoices);
    const invoicesActions = useActions(actions.invoicesActions);
    useEffect(() => {
        invoicesActions.getInvoices();
    }, []);
    return (
        <section className="main">
            <PageTitle title="Invoices" />
            <div className="main__actions">
                <PageSection name="Actions">
                    <Link className="btn" to="/create">
                        Add new
                    </Link>
                </PageSection>
            </div>
            <div className="main__invoices">
                <PageSection name="Invoices">
                    <Table data={data} />
                </PageSection>
            </div>
        </section>
    );
};
