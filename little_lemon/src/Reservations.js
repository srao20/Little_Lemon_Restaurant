import React from 'react';
import ReserveTable from './ReserveTable';
const Reservations = (props) => {
    return (
        <>
        <ReserveTable SubmitForm = {props.SubmitForm} />
        </>
    );
};

export default Reservations;