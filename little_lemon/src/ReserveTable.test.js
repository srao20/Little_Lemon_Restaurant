import {fireEvent, render, screen} from "@testing-library/react"
import '@testing-library/jest-dom';
import App from '../App.js'

test("Renders the Reserve Tabke heading", ()=>{
    render(<App/>);
    const ReserveTable = screen.getByText("reservations");
    expect(ReserveTable).toBeInTheDocument()
})