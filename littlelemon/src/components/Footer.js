import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
    const footerLinks = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT', href: '/#about' },
        { name: 'MENU', href: '/#menu' },
        { name: 'RESERVATIONS', href: '/booking' },
        { name: 'ORDER ONLINE', href: '/#order-online' },
        { name: 'LOGIN', href: '/login' },
    ];

    return (
        <footer className="site-footer" role="contentinfo">
            <div className="container footer-grid">
                {/* Logo Image */}
                <div className="footer-column">
                    <p className="logo-link">
                        <img src={logo} alt="Little Lemon Logo" className="logo-img" />
                    </p>
                    <p>&copy; 2025 Little Lemon. All rights reserved.</p>
                </div>

                <nav className="footer-column" aria-labelledby="doormat-nav-title">
                    <h4 id="doormat-nav-title">Doormat Navigation</h4>
                    <ul>
                        {footerLinks.map(link => (
                            <li key={link.name}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <address className="footer-column" aria-labelledby="contact-title">
                    <h4 id="contact-title">Contact</h4>
                    <ul>
                        <li><span aria-hidden="true">📞</span> (312) 555-0100</li>
                        <li><span aria-hidden="true">📧</span> contact@littlelemon.com</li>
                        <li><span aria-hidden="true">📍</span> 123 Flavor St, Chicago, IL</li>
                    </ul>
                </address>

                <nav className="footer-column" aria-labelledby="social-title">
                    <h4 id="social-title">Connect</h4>
                    <div className="social-links">
                        <a href="#" aria-label="Visit us on Facebook">📘 Facebook</a>
                        <a href="#" aria-label="Follow us on Instagram">📸 Instagram</a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
