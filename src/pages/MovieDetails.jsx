import { Outlet, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieDescription from 'components/MovieDescription/MovieDescription';
import { getMovieById } from '../services/API';
import { BsFillReplyFill } from 'react-icons/bs';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function getMovieInfo() {
      const movie = await getMovieById(movieId);
      setMovie(movie);
    }
    getMovieInfo();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <main>
      <div>
        <div>
          <BsFillReplyFill /> <Link to={location.state.from}>Go back</Link>
        </div>

        <MovieDescription movie={movie} />
      </div>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state.from }}>
              Review
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
