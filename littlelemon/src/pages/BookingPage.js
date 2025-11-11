import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = ({ submitForm, availableTimes, dispatch }) => (
    <main className="booking-container" role="main">
        <div className="container">
            <h1 className="text-green">Reserve a Table</h1>
            <p className="booking-subtitle">Fill out the form below to secure your spot at Little Lemon.</p>
            <BookingForm 
                submitForm={submitForm}
                availableTimes={availableTimes} 
                dispatch={dispatch} 
            /> 
        </div>
    </main>
);

export default BookingPage;
