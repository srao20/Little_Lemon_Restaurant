import React from "react";
import { useState } from "react";


const ReserveTable = (props) => {
    const[date, setDate] = useState("")
    const[time, setTime] = useState("")
    const[guests, setGuests] = useState("")
    const[occasion, setOccasion] = useState("")

    const handleSubmit =(e) => {
        e.preventDefault();
        props.SubmitForm(e);

    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <>
           <form onSubmit={handleSubmit}>
                <div>
                    <h3>Provide Your Reservation Details</h3>
                </div>
                {/*Choose Date*/}
                <div className="choosedate">
                    <label htmlFor="choose-date">Choose Date: </label>
                    <input
                    id = 'choose-date'
                    type = "date"
                    value = {date}
                    onChange = {(e) => handleChange(e.target.value)}
                    required
                    />
                </div>
                {/*Choose Time*/}
                <div className="choosetime">
                    <label htmlFor="choose-time">Choose Time: </label>
                    <select id = 'choose-time' value={time} onChange={(e) => setTime(e.target.value)}>
                        <option value = "">Select a time</option>
                        {
                            props.timeAvailaibility.timeAvailaibility.map(timeAvailaibility => {return <option key={timeAvailaibility}>{timeAvailaibility}</option>
                            })
                        }
                    </select>
                </div>
                {/*Choose Guests*/}
                <div className="chooseguests">
                    <label htmlFor="choose-guests">No Of Guets: </label>
                    <input
                    id = 'choose-guests'
                    min="1"
                    value={guests}
                    onChange={(e)=> setGuests(e.target.value)}
                    required/>
                </div>
                {/*Choose occation*/}
                <div className="chooseoccation">
                    <label htmlFor="choose-occasion">Choose Occation: </label>
                    <select id = 'choose-occation' onChange={(e)=> setOccasion(e.target.value)}>
                    <option value = "">Select a occation</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                {/*Submit form*/}
                <div className="submit-btn">
                    <input aria-label='On Click' type='submit' value={'Make your Booking'}/>
                </div>

            </form>
        </>
    )
}

export default ReserveTable;