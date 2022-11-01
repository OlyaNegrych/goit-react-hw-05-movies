import { useLocation } from 'react-router-dom';
import { MoviesUl, MovieLi, NavItem } from '../MoviesList/MoviesList.styled';
// import PropTypes from 'prop-types';

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

// MoviesList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number.isRequired,
//       original_title: PropTypes.string.isRequired,
//     })
//   ),
// };