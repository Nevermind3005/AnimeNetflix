import React, { useEffect, useState } from 'react';
import { baseURL, endpoints } from '../api';
import '../Styles/Banner.css';

const Banner: React.FC = () => {
    const [anime, setAnima] = useState<any>({
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
                setAnima(res.data[Math.floor(Math.random() * res.data.length)])
            );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ position: 'relative', marginTop: '-60px' }}>
            {anime.attributes.coverImage.large !== '' && (
                <header
                    className='banner'
                    style={{
                        backgroundImage: `url(${anime.attributes.coverImage.large})`,
                    }}
                ></header>
            )}
            <div className='container center-vert'>
                <div>
                    <div className='title textOverflow'>
                        {anime.attributes.titles.en === '' ||
                        anime.attributes.titles.en == null
                            ? anime.attributes.titles.en_jp
                            : anime.attributes.titles.en}
                    </div>
                    <div className='description textOverflow'>
                        {anime.attributes.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
