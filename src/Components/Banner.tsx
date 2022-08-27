import React, { useEffect, useState } from 'react';
import { baseURL, endpoints } from '../api';
import '../Styles/Banner.css';

interface MovieObj {
    attributes: {
        coverImage: {
            small: string;
            original: string;
            large: string;
        };
        titles: {
            en: string;
            en_jp: string;
        };
        description: string;
    };
}

const Banner: React.FC = () => {
    const [movie, setMovie] = useState<MovieObj>({
        attributes: {
            coverImage: {
                small: '',
                original: '',
                large: '',
            },
            titles: {
                en: '',
                en_jp: '',
            },
            description: '',
        },
    });

    const fetchData = async () => {
        fetch(`${baseURL}${endpoints.trending}`, {
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
                    throw new Error('Server responds with error!' + res.status);
                }
                return res.json();
            })
            .then((res) =>
                setMovie(res.data[Math.floor(Math.random() * res.data.length)])
            );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ position: 'relative', marginTop: '-60px' }}>
            {movie.attributes.coverImage.large !== '' && (
                <header
                    className='banner'
                    style={{
                        backgroundImage: `url(${movie.attributes.coverImage.large})`,
                    }}
                ></header>
            )}
            <div className='container center-vert'>
                <div>
                    <div className='title textOverflow'>
                        {movie.attributes.titles.en === '' ||
                        movie.attributes.titles.en == null
                            ? movie.attributes.titles.en_jp
                            : movie.attributes.titles.en}
                    </div>
                    <div className='description textOverflow'>
                        {movie.attributes.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
