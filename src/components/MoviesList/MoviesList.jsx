import { useLocation } from 'react-router-dom';
import { MoviesUl, MovieLi, NavItem } from '../MoviesList/MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <MoviesUl>
      {movies.map(movie => (
        <MovieLi key={movie.id}>
          <NavItem to={`${movie.id}`} state={{ from: location }}>
            {movie.original_title}
          </NavItem>
        </MovieLi>
      ))}
    </MoviesUl>
  );
};

export default MoviesList;