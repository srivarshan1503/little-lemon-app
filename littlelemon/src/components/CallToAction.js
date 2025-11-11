import React from "react";
import restaurantImg from "../assets/restaurant.jpg";

const CallToAction = ({ navigate }) => (
    <header className="hero-section" role="banner" aria-labelledby="hero-title">
        <div className="container hero-content">
            <div className="hero-text">
                <h1 id="hero-title">Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    Book a table with us today!
                </p>
                <button
                    className="hero-button"
                    onClick={() => navigate('/booking')}
                    aria-label="Reserve a Table Button" 
                >
                    Reserve a Table
                </button>
            </div>
            <figure className="hero-image">
                <img
                    src={restaurantImg}
                    alt="Little Lemon Restaurant Interior"
                    loading="lazy"
                    onError={(e) => e.target.src='https://placehold.co/320x400/EDEFEE/333?text=Image+Missing'}
                />
                <figcaption className="sr-only">Little Lemon Restaurant Interior.</figcaption>
            </figure>
        </div>
    </header>
);

export default CallToAction;
