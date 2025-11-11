import React, { useState, useReducer } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import './App.css';

// --- ASSUMED API FUNCTIONS ---
const fetchAPI = (date) => {
    let result = [];
    const seed = date.getDate(); 
    for(let i = 17; i <= 22; i++) {
        if((i % 2 === 0 && seed % 3 !== 0) || (i % 3 === 0 && seed % 2 !== 0)) {
            result.push(`${i}:00`);
        }
    }
    if(result.length === 0) return ["No slots available"];
    return result;
};

const submitAPI = (formData) => {
    console.log("[API Call] Submitting Form Data:", formData);
    return true; 
};

// --- REDUCER ---
const initializeTimes = () => fetchAPI(new Date());
const updateTimes = (state, action) => {
    switch(action.type){
        case 'UPDATE_TIMES':
            return fetchAPI(action.payload);
        default:
            return state;
    }
};

function App() {
    const [currentPath, setCurrentPath] = useState('/');
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const navigate = (path) => {
        setCurrentPath(path);
        window.scrollTo(0,0);
    };

    const submitForm = (formData) => {
        const success = submitAPI(formData);
        if(success) {
            navigate('/confirmed');
            return true;
        } else {
            console.error("Submission failed.");
            return false;
        }
    };

    const MainContent = () => {
        switch(currentPath){
            case '/':
                return <HomePage navigate={navigate} />;
            case '/booking':
                return <BookingPage submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch} />;
            case '/confirmed':
                return <ConfirmedBooking navigate={navigate} />;
            default:
                return <main className="booking-container" role="main"><h1>404</h1><p>Page Not Found</p></main>;
        }
    };

    return (
        <>
            <Nav navigate={navigate} />
            {MainContent()}
            <Footer />
        </>
    );
}
export { initializeTimes, updateTimes };
export default App;
