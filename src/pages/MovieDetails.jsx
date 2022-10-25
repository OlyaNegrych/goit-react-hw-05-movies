import { Outlet, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from '../components/API';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    console.log(movieId);

    useEffect(() => {
      getMovieById(movieId).then(setMovie);
    }, [movieId]);

    if (!movie) {
        return null;
    }
    
  return (
    <main>
      <button type="button">
        <span>icon-arrow-left</span>
        Go back
      </button>
      <img src={movie.html} alt={movie.name} />
      <div>
        <h2>{movie.name}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos.
        </p>
      </div>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="review">Review</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails ;