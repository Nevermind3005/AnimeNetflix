import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default App;
