import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar: React.FC = () => {
    return (
        <nav className='container component text'>
            <div className='left-container push-up'>
                <Link to='/' className='item link'>
                    HOME
                </Link>
                <div className='item left-container'>
                    BROWSE
                    <i className='bi bi-caret-down-fill icon arrow'></i>
                </div>
            </div>
            <div className='container'>
                <div className='circle item'>
                    <i className='bi bi-search icon'></i>
                </div>
                <div className='circle item'>
                    <i className='bi bi-person-fill icon'></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
