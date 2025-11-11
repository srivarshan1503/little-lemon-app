import React, { useState, useEffect, useCallback } from 'react';

const BookingForm = ({ submitForm, availableTimes, dispatch }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('None');
    const [isFormValid, setIsFormValid] = useState(false);

    const checkFormValidity = useCallback(() => {
        const allFieldsSet = date !== '' && time !== '' && guests >= 1 && guests <= 10;
        const today = new Date();
        today.setHours(0, 0, 0, 0); 
        const selectedDate = new Date(date);
        const isDateValid = selectedDate >= today;

        return allFieldsSet && isDateValid;
    }, [date, time, guests]);

    useEffect(() => {
        setIsFormValid(checkFormValidity());
    }, [date, time, guests, checkFormValidity]);

    const handleDateChange = (e) => {
        const selectedDateString = e.target.value;
        setDate(selectedDateString);
        
        if (selectedDateString) {
            const selectedDateObject = new Date(selectedDateString);
            dispatch({ type: 'UPDATE_TIMES', payload: selectedDateObject });
        }
        
        if (availableTimes.length > 0) {
            setTime(availableTimes[0]);
        } else {
             setTime(''); 
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!isFormValid) {
            console.warn("Form validation failed. Submission blocked.");
            return; 
        }

        const formData = { 
            date, 
            time, 
            guests: Number(guests), 
            occasion 
        };
        
        submitForm(formData); 
    };

    const todayDate = new Date().toISOString().split('T')[0];

    return (
        <form onSubmit={handleSubmit} className="booking-form" aria-label="Table Reservation Form" data-testid="booking-form">
            <div className="form-field">
                <label htmlFor="res-date">Choose date</label>
                <input 
                    type="date" 
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                    min={todayDate} 
                    required
                />
                {date && new Date(date) < new Date(todayDate) && 
                    <p className="validation-error" aria-live="polite">Date must be today or in the future.</p>}
            </div>
            
            <div className="form-field">
                <label htmlFor="res-time">Choose time</label>
                <select 
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                    {availableTimes.map(t => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                    {(availableTimes.length === 0 || availableTimes[0] === "No slots available") && 
                        <option value="" disabled>No slots available</option>}
                </select>
            </div>
            
            <div className="form-field">
                <label htmlFor="guests">Number of guests</label>
                <input 
                    type="number" 
                    placeholder="1" 
                    min="1"        
                    max="10"       
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required       
                />
                {(guests < 1 || guests > 10) && 
                    <p className="validation-error" aria-live="polite">Guests must be between 1 and 10.</p>}
            </div>
            
            <div className="form-field">
                <label htmlFor="occasion">Occasion</label>
                <select 
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                >
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            
            <input 
                type="submit" 
                value="Make Your Reservation" 
                className={`hero-button ${isFormValid ? '' : 'disabled-button'}`}
                disabled={!isFormValid} 
                aria-label="Make Reservation" 
            />
             {!isFormValid && <p className="validation-error" aria-live="polite">Please fill out all fields correctly.</p>}
        </form>
    );
};

export default BookingForm;
