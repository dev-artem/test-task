import React from 'react'
import './PageTitle.scss'

export const PageTitle = ({title}) => {
    return (
        <div className="title">
            <h2 className="title__name">{title}</h2>
            <div className="title__line" ></div>
        </div>
    )
}
