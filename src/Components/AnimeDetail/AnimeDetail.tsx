import { url } from 'inspector';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../api';
import './AnimeDetail.css';

const AnimeDetail = () => {
    const { animeId } = useParams();
    const [anime, setAnime] = useState<any>(null);

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

    if (anime == null) {
        return <div></div>;
    }

    return (
        <div
            style={{
                position: 'relative',
                marginTop: '-60px',
            }}
        >
            {anime.attributes.coverImage == null && (
                <div
                    style={{
                        backgroundImage: `url(${anime.attributes.posterImage.original})`,
                        backgroundSize: 'contain',
                        filter: 'blur(8px)',
                        WebkitFilter: 'blur(8px)',
                        height: '448px',
                        width: '100%',
                        position: 'absolute',
                    }}
                ></div>
            )}
            <img
                className='banner'
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    position: 'relative',
                }}
                src={
                    anime.attributes.coverImage == null
                        ? anime.attributes.posterImage.original
                        : anime.attributes.coverImage.original
                }
                alt={
                    anime.attributes.titles.en === '' ||
                    anime.attributes.titles.en == null
                        ? anime.attributes.titles.en_jp
                        : anime.attributes.titles.en
                }
            />
            <h2 className='anime_name'>
                {anime.attributes.titles.en === '' ||
                anime.attributes.titles.en == null
                    ? anime.attributes.titles.en_jp
                    : anime.attributes.titles.en}
            </h2>
            <div className='content'>
                <div className='frame_wrapper'>
                    <iframe
                        className='trailer_video'
                        src={
                            'https://www.youtube.com/embed/' +
                            `${anime.attributes.youtubeVideoId}`
                        }
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
                <div className='description_detail'>
                    {anime.attributes.description}
                </div>
            </div>
        </div>
    );
};

export default AnimeDetail;
