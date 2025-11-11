import React from "react";
import logo from "../assets/logo.png";

const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/#about' },
    { name: 'MENU', path: '/#menu' },
    { name: 'RESERVATIONS', path: '/booking' },
    { name: 'ORDER ONLINE', path: '/#order-online' },
    { name: 'LOGIN', path: '/login' },
];

const Nav = ({ navigate }) => {
    const handleNavigation = (path) => {
        if (path.startsWith('/#')) {
            navigate('/');
            setTimeout(() => {
                const sectionId = path.substring(2);
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 10);
        } else {
            navigate(path);
        }
    };

    return (
        <nav className="site-nav-bar" role="navigation" aria-label="Main Navigation">
            <div className="container header-content">
                {/* Logo Image */}
                <a onClick={() => handleNavigation('/')} className="logo-link" aria-label="Little Lemon Home" role="button">
                    <img src={logo} alt="Little Lemon Logo" className="logo-img" />
                </a>

                <nav className="main-nav">
                    <ul>
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <a
                                    onClick={() => handleNavigation(link.path)}
                                    className="nav-link"
                                    aria-label={`Go to ${link.name} page or section`}
                                    role="button"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="menu-toggle" aria-label="Open navigation menu">☰</button>
                </nav>
            </div>
        </nav>
    );
};

export default Nav;
