import { Link } from 'react-router-dom';
// import { Container, CardWrapper, ProductName } from './ProductList.styled';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>
            {movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;