import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../../services/API';
import { MoviesList, MovieItem, NavItem } from '../Home/Home.styled';

const Home = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrending() {
      try {
        const trendingFilms = await getTrendingMovies();
        setTrendingMovies(trendingFilms);
      } catch (error) {
        console.log(error);
      }
    }
    getTrending();
  }, []);

  if (!trendingMovies) {
    return null;
  }

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList>
        {trendingMovies.map(movie => {
          return (
            <MovieItem key={movie.id}>
              <NavItem to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </NavItem>
            </MovieItem>
          );
        })}
      </MoviesList>
    </div>
  );
};

export default Home;
