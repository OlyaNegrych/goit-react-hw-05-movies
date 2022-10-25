import MoviesList from "components/MoviesList/MoviesList";
import { useState, useEffect } from 'react';
import { getMovies } from '../components/API';
    
const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
getMovies().then(setMovies);
   }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        <MoviesList movies={movies} />
      </ul>
    </main>
  );
};

export default Home;
