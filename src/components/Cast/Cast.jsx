import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from '../../services/API';

const Cast = () => {
  const [cast, setCast] = useState(null);
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
  }, [movieId]);

  console.log(cast);

  if (!cast) {
    return null;
  }
 
  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img src={actor.profile_path} alt="" />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
