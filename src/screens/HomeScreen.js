import React from 'react'
import "./HomeScreen.css"
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../Requests'
import Row from '../Row'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>

        <Banner/>
        <Row
        title='NETFLIX ORIGINAL'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        />
        <Row title='Trending Now'fetchUrl={requests.fetchTrending}/>
        <Row title='Top Rated'fetchUrl={requests.fetchTopRated}/>
        <Row title='Action Movies'fetchUrl={requests.fetchActionMovies}/>
        <Row title='Comedy Movies'fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horrer Movies'fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romantic Moives'fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Documentaries'fetchUrl={requests.fetchDocumentaries}/>
        
    </div>
  )
}

export default HomeScreen