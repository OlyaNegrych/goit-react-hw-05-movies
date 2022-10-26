
const MovieDescription = ({ movie }) => {
    const genres = movie.genres.map(genre => genre.name + ' ');

  return (
    <div>
      <img src={movie.backdrop_path} alt={movie.name} />
      <div>
        <h2>
          {movie.original_title}({movie.release_date.split('').splice(0, 4)})
        </h2>
        <p>User score: {(Number(movie.vote_average) * 10).toFixed(0)}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </div>
  );
};

export default MovieDescription;
