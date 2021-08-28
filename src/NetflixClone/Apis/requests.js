const API_KEY = '2839239dd1f5bea4e8cd92be2b7f6b43';

const requests = {
    trending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentariesMovies : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;