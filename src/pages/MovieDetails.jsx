import { Outlet, useParams, Link } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
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

  const backLink = location.state?.from ?? '/home';

  return (
    <main>
      <div>
        <div>
          <BsFillReplyFill /> <Link to={backLink}>Go back</Link>
        </div>

        <MovieDescription movie={movie} />
      </div>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>
              Review
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
