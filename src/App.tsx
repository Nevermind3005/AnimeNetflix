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
            <Row title='Adventure' endpoint={endpoints.adventure} />
            <Row title='Top rated' endpoint={endpoints.topRated} />
            <Row title='Comedy' endpoint={endpoints.comedy} />
            <Row title='Fantasy' endpoint={endpoints.fantasy} />
            <Row title='Action' endpoint={endpoints.action} />
        </div>
    );
};

export default App;
