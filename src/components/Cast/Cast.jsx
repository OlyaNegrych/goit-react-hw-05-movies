import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner';
import Notiflix from 'notiflix';
import { getCastById } from '../../services/API';
import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function getCast(movieId) {
      try {
        setIsLoading(true);
        const castList = await getCastById(movieId);
        setCast(castList);
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, something has gone wrong... Please try again.'
        );
      } finally {
        setIsLoading(false);
      }
    }
    getCast(movieId);

 return () => {
   controller.abort();
    };
    
  }, [movieId]);

  return (
    <CastList>
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
      {cast.length === 0 && <p>We don't have any cast for this movie.</p>}
      {cast.map(actor => (
        <CastItem key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt=""
            width="200"
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
