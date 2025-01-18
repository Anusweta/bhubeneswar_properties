import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <style>
                {`
/* Base Styles */
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

img {
    width: 220px;
    height: auto;
}

.header {
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 10px 20px;
    width: 100%;
    box-sizing: border-box;
}

.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0; /* Reset gap here */
}

.header-inner-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 94%;
}

#site-logo {
    display: flex;
    align-items: center;
    margin-right: 10px; /* Reduce gap between logo and nav items */
}

/* Navigation Menu */
.main-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 20px; /* Adds spacing between menu items */
}

.main-menu li {
    display: inline-block;
    position: relative;
}

.main-menu a {
    text-decoration: none;
    color: #333;
    text-transform: uppercase;
    display: inline-block;
    font-size: 16px; /* Slightly larger font size for better visibility */
    padding: 5px 10px; /* Add some padding around the text for better spacing */
}

/* Dropdown Menu */
.main-menu .has-children > a::after {
    content: ' ▼';
    font-size: 12px;
}

.main-menu .has-children > ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    min-width: 180px;
    padding: 10px;
}

.main-menu .has-children:hover > ul {
    display: block;
}

/* Header Right Section */
.header-right {
    display: flex;
    align-items: center;
    gap: 15px; /* Reduced gap between the phone icon and the button */
}

.header-call {
    display: flex;
    align-items: center;
}

.header-call .number {
    margin-left: 5px;
}

.header-btn a {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

/* Mobile Navigation */
.mobile-nav-toggler {
    display: none;
}

/* Mobile and Tablet Styles */
@media (max-width: 1024px) {
    .header-inner-wrap {
        flex-direction: column;
        align-items: flex-start;
        
    }

    .main-menu {
        flex-direction: column;
        display: none;
        width: 100%;
    }

    .main-menu.open {
        display: block;
    }

    .header-right {
        margin-top: 20px;
        flex-direction: column;
    }

    .header-right .header-call {
        margin-bottom: 10px;
    }

    .mobile-nav-toggler {
        display: block;
        background: none;
        border: none;
        font-size: 25px;
        cursor: pointer;
        color: #333;
    }

    .main-menu li {
        width: 100%;
        padding: 10px 0;
        text-align: left;
    }
}

/* Desktop Styles */
@media (min-width: 1024px) {
    .header-inner-wrap {
        flex-direction: row;
    }

    .main-menu {
        flex-direction: row;
    }

    .mobile-nav-toggler {
        display: none;
    }
}

/* Ensure banner section is not hidden under the header */
.banner {
    margin-top: 80px; /* Adjust the margin to ensure it doesn't hide under the fixed header */
}


                `}
            </style>

            <header className="header">
                <div className="header-inner">
                    <div className="header-inner-wrap">
                        <div id="site-logo">
                            <Link to="/home">
                                <img
                                    src="/images/logo/bhubaneswarproperty-logo.jpg"
                                    alt="Bhubaneswar Property Logo"
                                />
                            </Link>
                        </div>

                        <nav className={`main-menu ${isMenuOpen ? 'open' : ''}`}>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li className="has-children">
                                    <Link to="javascript:void(0);">Property</Link>
                                    <ul>
                                        <li><Link to="/PropertyList">Property List </Link></li>
                                    </ul>
                                    <li><Link to="/home">Contact Us</Link></li>
                                </li>
                                
                            </ul>
                        </nav>

                        <div className="header-right">
                            <div className="header-call">
                                <div className="icon">📞</div>
                                <div className="number" style={{ fontSize: '15px', }}>9090212121</div>
                            </div>
                            <div className="header-btn">
                                <Link to="/dashboard-add-properties" className="tf-button-default">
                                    Add Listing
                                </Link>
                            </div>
                        </div>

                        <button className="mobile-nav-toggler" onClick={toggleMenu}>
                            ☰
                        </button>
                    </div>
                </div>
            </header>

                   </>
    );
};

export default Header;
