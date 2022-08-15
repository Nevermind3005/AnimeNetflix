import React, { useEffect, useState } from 'react';
import { baseURL } from '../api';
import '../Styles/Row.css';

interface Props {
    title: string;
    endpoint: string;
}

interface MovieObj {
    attributes: {
        coverImage: {
            small: string;
            original: string;
            large: string;
        };
        posterImage: {
            small: string;
            medium: string;
            large: string;
            original: string;
        };
        titles: {
            en: string;
            en_jp: string;
        };
        description: string;
        youtubeVideoId: string;
    };
}

const Row: React.FC<Props> = ({ title, endpoint }) => {
    const [movies, setMovies] = useState<MovieObj[]>();

    useEffect(() => {
        const fetchData = async () => {
            fetch(`${baseURL}${endpoint}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/vnd.api+json',
                    Accept: 'application/vnd.api+json',
                    CLIENT_ID:
                        'dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd',
                },
            })
                .then((res) => {
                    if (res.status >= 400) {
                        throw new Error(
                            'Server responds with error!' + res.status
                        );
                    }
                    return res.json();
                })
                .then((res) => {
                    setMovies(res.data);
                });
        };
        fetchData();
        console.log(movies);
    }, [endpoint, movies]);

    return (
        <div>
            <h2 className='movie_title'>{title}</h2>
            <div className='row_movies'>
                {movies?.map((movie) => (
                    <img
                        className='row_movie'
                        src={movie.attributes.posterImage.large}
                        alt={
                            movie.attributes.titles.en === '' ||
                            movie.attributes.titles.en == null
                                ? movie.attributes.titles.en_jp
                                : movie.attributes.titles.en
                        }
                        key={movie.attributes.youtubeVideoId}
                    />
                ))}
            </div>
        </div>
    );
};

export default Row;
