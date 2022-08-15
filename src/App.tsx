import React from 'react';
import { endpoints } from './api';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Row from './Components/Row';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Navbar />
            <Banner />
            <Row title='Popular' endpoint={endpoints.trending} />
        </div>
    );
};

export default App;
