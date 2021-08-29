import React, {useState ,useEffect} from 'react';
import axios from '../../../Apis/axios';
import './Row.css';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';

const Row = ({title, urlRequest, isLarge}) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    const baseURL = 'https://image.tmdb.org/t/p/original/';

    useEffect(()=>{
        axios.get(urlRequest)
        .then(res=>setMovies(res.data.results))
        .catch(error=>console.log(error));
    },[urlRequest]);

    const posterClicked = movie => {
        movieTrailer(movie.name || movie.title || movie.original_title || movie.original_name ||'')
        .then(url => {
            if(trailerUrl === url){
                setTrailerUrl('');
            } else{
                setTrailerUrl(url);
            }
        })
        .catch(err => console.log(err));
    };
    
    return <div className='row'>
        <h2 className='row__title'>{title}</h2>
        <div className='row__posters'>
            {movies.map(movie => {
                if(movie.backdrop_path !== null){
                    return <img src={`${baseURL}${isLarge ? movie.poster_path : movie.backdrop_path }`}
                    onClick={() => posterClicked(movie)}
                    alt={movie.name}
                    key={movie.id}
                    className={`row__poster ${isLarge ? 'row__largePoster' : ''}`}
                    />
                }
            }   
            )};
        </div>
        <div className='row__trailer'>{trailerUrl && <ReactPlayer  width='100%' height='300px' url={trailerUrl} playing={true} controls={true}/>}</div>  

    </div>
};

export default Row;