/* eslint-disable react/prop-types */
import React from 'react';

const Field = ({ htmlFor, label, error, children }) => {
    const id = htmlFor || getID(children)
    return (
        <div className='form-control'>
            {label && <label className="auth-label" htmlFor={id}>{label}</label>}
            {children}
            {error && <p role='alert' className='text-red-600'>{error.message}</p>}
        </div>
    );
};

export default Field;

function getID(children) {
    const child = React.Children.only(children)
    if ("id" in child.props) return child.props.id
}