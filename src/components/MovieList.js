import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p className="empty-state">No movies match your filters.</p>;
  }

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id ?? movie.title}
          movie={movie}
          to={`/movie/${movie.id}`}
        />
      ))}
    </section>
  );
}

export default MovieList;
