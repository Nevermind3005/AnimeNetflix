import { useRouteError } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id='error_page'>
            <div id='error_elements'>
                <h1>Something went wrong.</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
