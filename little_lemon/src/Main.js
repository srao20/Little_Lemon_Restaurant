import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Reservations from "./Reservations";
import ConfirmedReservation from "./ConfirmedReservation"

const Main = () => {
    const submitAPI = function(formData) {
        return true;
    }

    const navigate = useNavigate();
    function SubmitForm(formData){
        if(submitAPI(formData)){
            navigate("/confirmed")
        }
    }
    return (
        <main>
            <Routes>
                <Route path='/' element={<Header/>}></Route>
                <Route path='/reservations' element={<Reservations SubmitForm = {SubmitForm}/>} />
                <Route path='/confirmed' element={<ConfirmedReservation/>}></Route>
            </Routes>
        </main>
    );
};

export default Main;