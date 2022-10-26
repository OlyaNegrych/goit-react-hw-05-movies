import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../../src/services/API';
    
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
      <ul>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
