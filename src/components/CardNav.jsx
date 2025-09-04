import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CardNav.css';

const CardNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="nav-container">
            <div className="nav-content">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    Portfolio
                </Link>

                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                    <li>
                        <Link
                            to="/"
                            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default CardNav;
