// Specials.js
import React from "react";
import greekSalad from "../assets/greek_salad.jpg";
import lemonDessert from "../assets/lemon_dessert.jpg";
import bruschetta from "../assets/bruchetta.svg";

const menuSpecialsData = [
    {
        id: 1,
        image: greekSalad,
        title: 'Greek Salad',
        price: '$12.99',
        description: 'The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
        id: 2,
        image: bruschetta,
        title: 'Bruschetta',
        price: '$5.99',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Perfect starter.',
    },
    {
        id: 3,
        image: lemonDessert,
        title: 'Lemon Dessert',
        price: '$5.00',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. Delightfully light.',
    },
];

const Specials = () => (
    <section className="specials-section" id="menu" aria-labelledby="specials-title">
        <div className="container">
            <div className="specials-header">
                <h2 id="specials-title">This week's specials!</h2>
                <button className="hero-button" aria-label="Online Menu Button">
                    Online Menu
                </button>
            </div>
            <div className="specials-grid">
                {menuSpecialsData.map(item => (
                    <article key={item.id} className="card" aria-labelledby={`special-title-${item.id}`}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="card-image"
                            loading="lazy"
                            onError={(e) => e.target.src='https://placehold.co/400x300/EDEFEE/333?text=Image+Missing'}
                        />
                        <div className="card-content">
                            <div className="card-title-bar">
                                <h3 id={`special-title-${item.id}`} className="card-title">{item.title}</h3>
                                <span className="card-price">{item.price}</span>
                            </div>
                            <p className="card-description">{item.description}</p>
                            <a href="#order-online" className="delivery-link" aria-label={`Order a delivery of ${item.title}`}>
                                Order a delivery 🛵
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Specials;
