import {
  DescriptionWrapper,
  Img,
  TextWrapprer,
} from '../MovieDescription/MovieDescription.styled';

const MovieDescription = ({ movie }) => {
    const genres = movie.genres.map(genre => genre.name + ' ');

  return (
    <>
      <DescriptionWrapper>
        <Img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.name}
        />
        <TextWrapprer>
          <h2>
            {movie.original_title}({movie.release_date.split('').splice(0, 4)})
          </h2>
          <p>User score: {(Number(movie.vote_average) * 10).toFixed(0)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </TextWrapprer>
      </DescriptionWrapper>
      <hr />
    </>
  );
};

export default MovieDescription;
