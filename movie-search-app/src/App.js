import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import MovieList from './MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const fetchData = async (input) =>{
    const fetch_url = `https://www.omdbapi.com/?s=${input}&apikey=e86e479e`;

    const request = await fetch(fetch_url);
    const response = await request.json();

    if(response.Search) {
      setMovies(response.Search);

    }
    
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
   <MovieList movies = {movies} />
  );
}

export default App;
