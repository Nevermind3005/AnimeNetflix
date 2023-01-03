import React from 'react';
import './Navbar.css';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

const handleQuery = (
    searchQuerry: String,
    e: React.FormEvent<HTMLFormElement>,
    navigate: NavigateFunction
) => {
    e.preventDefault();
    navigate(`search/${searchQuerry}`);
};

const Navbar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    return (
        <nav className='nb_container component text'>
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
            <div className='nb_container'>
                <div className='item'>
                    <form
                        action='/'
                        method='get'
                        onSubmit={(e) => handleQuery(searchQuery, e, navigate)}
                    >
                        <input
                            placeholder='Search query'
                            type='search'
                            required
                            onChange={(e) => setSearchQuery(e.target.value)}
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
