import { endpoints } from '../../api';
import Banner from '../Banner/Banner';
import Row from '../Row/Row';

const Home = () => {
    return (
        <div>
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

export default Home;
