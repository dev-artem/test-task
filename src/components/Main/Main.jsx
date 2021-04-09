import React from 'react';
import { PageTitle } from '../PageTitle';
import { Link } from 'react-router-dom';
import { Table } from '../Table';
import { PageSection } from '../PageSection';
import './Main.scss';

export const Main = () => {
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
                    <Table />
                </PageSection>
            </div>
        </section>
    );
};
