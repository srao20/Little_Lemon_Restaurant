import React from 'react';
import ReserveTable from './ReserveTable';
const Reservations = (props) => {
    return (
        <>
        <h3>Provide Your Reservation Details</h3>
        <ReserveTable SubmitForm = {props.SubmitForm} />
        </>
    );
};

export default Reservations;