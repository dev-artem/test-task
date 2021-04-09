import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../state';
import { PageTitle } from '../PageTitle';
import { Table } from '../Table';
import { PageSection } from '../PageSection';

import './Main.scss';

export const Main = () => {
    const { loading, error, data } = useSelector((state) => state.invoices);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.invoicesActions.getInvoices());
    }, [dispatch]);

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
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {!loading && !error && (
                    <PageSection name="Invoices">
                        <Table data={data} />
                    </PageSection>
                )}
            </div>
        </section>
    );
};
