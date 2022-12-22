import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../api';

const AnimeDetail = () => {
    const { animeId } = useParams();
    const [anime, setAnime] = useState<any>('');

    useEffect(() => {
        const fetchData = async () => {
            fetch(`${baseURL}anime/${animeId}`, {
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
                    setAnime(res.data);
                })
                .then(() => console.log(anime));
        };
        fetchData();
    }, [anime, animeId]);

    return (
        <div>
            {anime &&
                (anime.attributes.titles.en === '' ||
                anime.attributes.titles.en == null
                    ? anime.attributes.titles.en_jp
                    : anime.attributes.titles.en)}
        </div>
    );
};

export default AnimeDetail;
