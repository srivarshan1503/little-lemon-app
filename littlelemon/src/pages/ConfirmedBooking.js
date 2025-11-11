import React from 'react';

const ConfirmedBooking = ({ navigate }) => (
    <main className="booking-container" role="main">
        <div className="container confirmed-box">
            <h1 className="text-green">Booking Confirmed! ✅</h1>
            <h2 style={{color: 'var(--primary-green)', marginTop: '0.5rem'}}>
                You're All Set!
            </h2>
            <p style={{marginBottom: '2rem'}}>
                Your reservation at Little Lemon has been successfully secured. We can't wait to see you.
                A detailed confirmation has been sent to your email.
            </p>
            <button 
                className="hero-button" 
                onClick={() => navigate('/')} 
                style={{backgroundColor: 'var(--secondary-orange)'}}
                aria-label="Back to Homepage Button"
            >
                Back to Homepage
            </button>
        </div>
    </main>
);

export default ConfirmedBooking;
