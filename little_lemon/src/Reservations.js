import React from 'react';
import ReserveTable from './ReserveTable';
const Reservations = (props) => {
    return (
        <>
        <ReserveTable timeAvailaibility = {props.timeAvailaibility} dispatch = {props.dispatch} SubmitForm = {props.SubmitForm} />
        </>
    );
};

export default Reservations;