import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { baseURL, endpoints } from '../../api';
import './AnimeList.css';

const AnimeList: React.FC = () => {
    const { query } = useParams();
    const [animeList, setAnimeList] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`${baseURL}${endpoints.search}${query}`, {
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
                    setAnimeList(res.data);
                });
        };
        fetchData();
    }, [query]);

    if (animeList == null) {
        return <div></div>;
    }

    return (
        <div className='al_container'>
            {animeList?.map((anime: any) => (
                <Link to={`/anime/${anime.id}`} key={anime.id}>
                    <img
                        src={anime.attributes.posterImage.large}
                        alt={
                            anime.attributes.titles.en === '' ||
                            anime.attributes.titles.en == null
                                ? anime.attributes.titles.en_jp
                                : anime.attributes.titles.en
                        }
                        className='anime_cover'
                    />
                </Link>
            ))}
        </div>
    );
};

export default AnimeList;
