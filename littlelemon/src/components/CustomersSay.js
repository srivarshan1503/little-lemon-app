import React from 'react';

const testimonialsData = [
    { id: 1, rating: '★★★★★', user: 'Sarah K.', review: 'The best Mediterranean food I’ve had outside of Europe!' },
    { id: 2, rating: '★★★★★', user: 'John M.', review: 'The bruschetta is a must-try. Fast service and friendly staff.' },
    { id: 3, rating: '★★★★☆', user: 'Leo T.', review: 'Great atmosphere and excellent Greek Salad. Will be back soon.' },
    { id: 4, rating: '★★★★★', user: 'Maria V.', review: 'Highly recommend the Lemon Dessert!' },
];

const CustomersSay = () => (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
        <div className="container">
            <h2 id="testimonials-title">What Our Customers Say</h2>
            <div className="testimonials-grid">
                {testimonialsData.map(t => (
                    <article key={t.id} className="testimonial-card" aria-label={`Testimonial from ${t.user}`}>
                        <p className="rating">{t.rating}</p>
                        <img
                            src={`https://placehold.co/60x60/495E57/FFF?text=${t.user[0]}`}
                            alt={`Photo of ${t.user}`}
                            className="user-photo"
                            loading="lazy"
                        />
                        <p className="user-name">{t.user}</p>
                        <blockquote className="review-text">"{t.review}"</blockquote>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default CustomersSay;
