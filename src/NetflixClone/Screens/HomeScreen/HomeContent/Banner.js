import React ,{useState, useEffect} from 'react';
import './Banner.css';
import requests  from '../../../Apis/requests';
import axios  from '../../../Apis/axios';

const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        axios.get(requests.netflixOriginals)
        .then(res => {
            const randomIndex =Math.floor(Math.random()*res.data.results.length);
            setMovie(res.data.results[randomIndex]);
        })
        .catch(error => console.log(error))
    },[])

    const baseURL = 'https://image.tmdb.org/t/p/original/';

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    };

    return <header className='banner' 
        style={
            {
                backgroundImage : `url(${baseURL}${movie?.backdrop_path})`,
                backgroundSize : 'cover',
                backgroundPosition : 'top center'
            }
        }
    >
        <div className='banner__content'>
            <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
        
            <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className='banner__fadeBottom'/>
    </header>
}

export default Banner;