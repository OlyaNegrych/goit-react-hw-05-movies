import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';
import { MagnifyingGlass } from 'react-loader-spinner';
import MovieDescription from 'components/MovieDescription/MovieDescription';
import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo';
import { getMovieById } from '../../services/API';
import { BsFillReplyFill } from 'react-icons/bs';
import { BtnBack, BtnTextLink } from '../MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    async function getMovieInfo() {
      try {
        setIsLoading(true);
        const movie = await getMovieById(movieId);
        setMovie(movie);
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, something has gone wrong... Please try again.'
        );
      } finally {
        setIsLoading(false);
      }
    }

    getMovieInfo();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const backLink = location.state?.from;

  return (
    <main>
      <div>
        <BtnBack>
          <BsFillReplyFill />
          <BtnTextLink to={backLink}>Go back</BtnTextLink>
        </BtnBack>

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
        <MovieDescription movie={movie} />
      </div>

      <AdditionalInfo/>
      <Suspense
        fallback={
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
        }
      >
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
