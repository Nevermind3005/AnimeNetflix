import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../api';
import '../Styles/Row.css';

interface Props {
    title: string;
    endpoint: string;
}

const Row: React.FC<Props> = ({ title, endpoint }) => {
    const [animes, setAnimes] = useState<any[]>([]);

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
                    setAnimes(res.data);
                });
        };
        fetchData();
    }, [endpoint]);

    return (
        <div>
            <h2 className='anime_title'>{title}</h2>
            <div className='row_animes'>
                {animes?.map((anime) => (
                    <Link to={`anime/${anime.id}`} key={anime.id}>
                        <img
                            src={anime.attributes.posterImage.large}
                            alt={
                                anime.attributes.titles.en === '' ||
                                anime.attributes.titles.en == null
                                    ? anime.attributes.titles.en_jp
                                    : anime.attributes.titles.en
                            }
                            className='row_anime'
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Row;
