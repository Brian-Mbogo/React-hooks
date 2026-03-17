import React from 'react';

const DEFAULT_POSTER = '/poster-placeholder.jpg';

function MovieCard({ movie }) {
  const { title, description, posterURL, rating } = movie;

  return (
    <article className="movie-card">
      <img
        className="movie-card__poster"
        src={posterURL || DEFAULT_POSTER}
        alt={title}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = DEFAULT_POSTER;
        }}
      />
      <div className="movie-card__body">
        <div className="movie-card__header">
          <h3 className="movie-card__title">{title}</h3>
          <span className="movie-card__rating">⭐ {Number(rating).toFixed(1)}</span>
        </div>
        <p className="movie-card__description">{description}</p>
      </div>
    </article>
  );
}

export default MovieCard;
