import React from 'react';
import { PageTitle } from '../PageTitle';
import { Button } from '../Button';
import { Table } from '../Table';
import { PageSection } from '../PageSection';
import './Main.scss';

export const Main = () => {
    return (
        <section className="main">
            <PageTitle title="Invoices" />
            <div className="main__actions">
                <PageSection name="Actions">
                    <Button name="Add new" />
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
