import React from 'react'
import { Route , Routes , useNavigate } from 'react-router-dom'
import Header from './Header'
import BookingForm from './BookingForm'
import ConfirmedBooking from './ConfirmedBooking'
import Menu from './Menu'
import Footer from './Footer'
export default function Main() {


    const seedRandom = (seed) => {
        let m = 0x80000000, a = 1103515245, c = 12345;
        let x = seed ? seed : Math.floor(Math.random() * m);
        return function() {
            x = (a * x + c) % m;
            return x / m;
        };
    }
    const fetchAPI = (date) => {
        const validDate = new Date(date);
        let result = [];
        let random = seedRandom(validDate.getDate());
        for (let i=17; i<=23; i++) {
            if (random() > 0.5) {
                result.push(`${i}:00`)
            }
            if (random() > 0.5) {
                result.push(`${i}:30`)
            }
        }
        return result;
    }
    const submitAPI = (formdata) => {
        return true; // Simulate a successful API submission
    }
    const updateTimes = (state, date) => {
        availableTimes: fetchAPI(date)
    }
    const initialState = {
        availableTimes:fetchAPI(new Date())
    }
    const [state, dispatch] = React.useReducer(updateTimes, initialState);
    
    const navigate= useNavigate();
    const submitForm = (formdata) =>{
        if (submitAPI(formdata)) {
            navigate('/confirmed')
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/reservations" element={<BookingForm  availableTimes={state} dispatch={dispatch}  submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Footer />} />
                <Route path="/about" element={<Footer />} />

            </Routes>
        </main>
    )
    }