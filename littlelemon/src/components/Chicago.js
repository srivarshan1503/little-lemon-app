import React from "react";
import chefMario from "../assets/ma2.jpg";
import chefAdrian from "../assets/ma1.jpg";

const Chicago = () => (
    <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="container about-content">
            <div className="about-text">
                <h2 id="about-title">Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Little Lemon is a cherished family-owned and operated restaurant, founded by two friends, Adrian and Mario. They share a deep passion for Mediterranean cuisine, combining traditional recipes with a modern culinary approach.
                </p>
                <p>
                    Our mission is simple: to offer a warm, welcoming dining experience where every dish tells a story of heritage and passion.
                </p>
            </div>

            <figure className="about-images">
                <img
                    src={chefMario}
                    alt="Chef Mario cooking"
                    className="about-image image-1"
                    loading="lazy"
                    onError={(e) => e.target.src='https://placehold.co/300x400/EE9972/000?text=Image+Missing'}
                />
                <img
                    src={chefAdrian}
                    alt="Chef Adrian smiling"
                    className="about-image image-2"
                    loading="lazy"
                    onError={(e) => e.target.src='https://placehold.co/300x400/F4CE14/000?text=Image+Missing'}
                />
            </figure>
        </div>
    </section>
);

export default Chicago;
