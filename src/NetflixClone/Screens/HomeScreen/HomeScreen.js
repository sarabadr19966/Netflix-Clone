import React from 'react';
import Nav from './HomeContent/Nav';
import Banner from './HomeContent/Banner';
import Row from './HomeContent/Row';
import requests from '../../Apis/requests';
import './HomeScreen.css';

const HomeScreen = () => {
  return <div className='homeScreen'>
    <Nav/>
    <Banner/>
    <Row title='Trending Now' urlRequest={requests.trending}/>
    <Row title='Top Rated' urlRequest={requests.topRated}/>
    <Row title='Netflix Originals' urlRequest={requests.netflixOriginals} isLarge/>
    <Row title='Action Movies' urlRequest={requests.actionMovies}/>
    <Row title='Horror Movies' urlRequest={requests.horrorMovies}/>
    <Row title='Romance Movies' urlRequest={requests.romanceMovies}/>
    <Row title='Comedy Movies' urlRequest={requests.comedyMovies}/>
    <Row title='Documentaries Movies' urlRequest={requests.documentariesMovies}/>
  </div>
};

export default HomeScreen;