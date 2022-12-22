import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

const handleQuerry = (
    searchQuerry: String,
    e: React.FormEvent<HTMLFormElement>
) => {
    alert(searchQuerry);
    e.preventDefault();
};

const Navbar: React.FC = () => {
    const [searchQuerry, setSearchQuerry] = useState<string>('');
    return (
        <nav className='container component text'>
            <div className='left-container push-up'>
                <Link to='/' className='item link'>
                    HOME
                </Link>
                <div
                    className='item left-container'
                    onClick={() => alert('Click')}
                >
                    BROWSE
                    <i className='bi bi-caret-down-fill icon arrow'></i>
                </div>
            </div>
            <div className='container'>
                <div className='item'>
                    <form
                        action='/'
                        method='get'
                        onSubmit={(e) => handleQuerry(searchQuerry, e)}
                    >
                        <input
                            placeholder='Search query'
                            type='search'
                            required
                            onChange={(e) => setSearchQuerry(e.target.value)}
                        />
                        <button
                            className='bi bi-search icon'
                            type='submit'
                        ></button>
                    </form>
                </div>
                <div className='circle item'>
                    <i className='bi bi-person-fill icon'></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
