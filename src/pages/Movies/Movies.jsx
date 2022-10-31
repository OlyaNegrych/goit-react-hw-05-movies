import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { MagnifyingGlass } from 'react-loader-spinner';
import { searchMovies } from '../../services/API';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [searcQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  const handleSubmit = query => {
    setSearchQuery(query);
    setSearchParams(query !== '' ? { query } : {});
  };

  useEffect(() => {
    const controller = new AbortController();

    if (!searcQuery && !query) {
      return;
    }

    setIsLoading(true);

    async function getMovies() {
      try {
        const newMovies = await searchMovies(query ? query : searcQuery);
        setMovies(newMovies);

        if (newMovies.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no films matching your search query. Please try again.'
          );
        }
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, something has gone wrong... Please try again.'
        );
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();

    return () => {
      controller.abort();
    };
  }, [searcQuery, query]);

  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && (
        <MagnifyingGlass
          visible={true}
          height="100"
          width="100"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
