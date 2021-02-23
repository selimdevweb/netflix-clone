
import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './request';
import './Banner.css'

 function Banner() {
    const [movie, setMovie] = useState([])
    const base_url = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
       
        async function fetchData() {
            const request = await axios .get(requests.fetchNetflixOriginals)
            const def =  request.data.results
            setMovie(
                def[Math.floor(Math.random() * request.data.results.length -1)]
            )
            //
       return request
        }
        
        fetchData()
    }, []);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1)  + "..." : str;
    }
    return (
        <header className="banner"
        style={
            {
                backgroundSize:"cover",
                backgroundImage: `url(
                    ${base_url}${movie?.backdrop_path}
                    )`,
                    backgroundPosition:"center center",
            }
        }>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My Liste</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 120)}
                </h1>
            </div>
            <div className="banner--fadeBottom">
                </div>
        </header>
    )
}

export default Banner
