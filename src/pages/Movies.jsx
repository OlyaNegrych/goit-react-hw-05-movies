import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/API';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MoviesList';

const Movies = () => {
  const [searcQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const filter = searchParams.get('query') ?? '';

 const handleSubmit = query => {
   setSearchQuery(query);
  //  setSearchParams(query !== '' ? { query } : {});
 };

  useEffect(() => {
    // if (!searcQuery && !filter) {
    //   return;
    // }

  if (!searcQuery) {
    return;
  }

    async function getMovies() {
      try {
        const newMovies = await searchMovies(searcQuery);
        setMovies(newMovies);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [searcQuery]);

  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
