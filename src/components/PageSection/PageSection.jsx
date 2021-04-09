import React from 'react';
import './PageSection.scss';

export const PageSection = ({ name, children }) => {
    return (
        <div className="page-section">
            <h3 className="page-section__title">{name}</h3>
            <div className="page-section__data">{children}</div>
        </div>
    );
};
