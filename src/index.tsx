import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AnimeDetail from './Components/AnimeDetail/AnimeDetail';
import AnimeList from './Components/AnimeList/AnimeList';
import Home from './Components/Home/Home';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'anime/:animeId',
                element: <AnimeDetail />,
                errorElement: <ErrorPage />,
            },
            {
                path: 'search/:query',
                element: <AnimeList />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

root.render(
    <React.StrictMode>
        <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        </style>
        <RouterProvider router={router} />
    </React.StrictMode>
);
