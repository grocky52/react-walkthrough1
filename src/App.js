import { useState, useEffect} from 'react';
import React from 'react-dom'
import './App.css';
import MovieCard from './components/movieCard';
//import { Component } from 'react';
import searchIcon from './search.svg';

//8b2aa521
const API_URL = 'http://www.omdbapi.com?apikey=8a2bb521';
const movie1 =
  {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
  }


function App() { //const app = () =>{return()}
  const [searchTerm, setSearchTerm] = useState('')

  const [movies, setMovies ] = useState([]);
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }


  useEffect(()=> {
    searchMovies('spiderman');
  }, []);
  
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className="search">
        <input 
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img  
        src={searchIcon}
        alt="Search"
        onClick={() => searchMovies(searchTerm)}

        />
      </div>

        {
          movies?.length > 0 
            ?(
              <div className='container'>
                {movies.map((movie) => (
                  <MovieCard movie={movie}/>
                ))}
              </div>

            ): (
              <div className='empty'>
                <h1>there is no movies yet</h1>
                </div>
            )
        }
    </div>

  );
      }


     


export default App;
