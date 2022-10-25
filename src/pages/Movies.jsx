import { useSearchParams } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList';
import { getMovies } from '../components/API';

const Movies = () => {
  const movies = getMovies();
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';

  const handleChange = e => {
    getMovies(e.target.value);
    return setSearchParams({ name: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
    e.target.reset();
  };

  //   const updateQueryString = name => {
  //     const nextParams = name !== '' ? { name } : {};
  //     setSearchParams(nextParams);
  //   };

  return (
    <main>
      <form>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit" onSubmit={handleSubmit}></button>
      </form>
      {/* {movies && <MoviesList movies={movies} />} */}
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;