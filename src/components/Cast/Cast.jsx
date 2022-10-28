import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from '../../services/API';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast(movieId) {
      try {
        const castList = await getCastById(movieId);
        setCast(castList);
      } catch (error) {
        console.log(error);
      }
    }
    getCast(movieId);

    // return () => {
    //   if (cast.length > 0) {
    //     return;
    //   }
    // };
    
  }, [movieId]);

console.log(cast);

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt=""
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
