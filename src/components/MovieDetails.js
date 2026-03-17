import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DEFAULT_POSTER = '/poster-placeholder.jpg';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => String(m.id) === String(id));

  if (!movie) {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Movie not found</h1>
          <p className="app__subtitle">That movie does not exist.</p>
        </header>
        <Link className="link" to="/">
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app__header details__header">
        <div>
          <h1 className="app__title">{movie.title}</h1>
          <p className="app__subtitle">⭐ {Number(movie.rating).toFixed(1)}</p>
        </div>
        <Link className="link" to="/">
          ← Back to home
        </Link>
      </header>

      <main className="details">
        <section className="panel details__panel">
          <img
            className="details__poster"
            src={movie.posterURL || DEFAULT_POSTER}
            alt={movie.title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = DEFAULT_POSTER;
            }}
          />
          <div>
            <h2 className="panel__title">Description</h2>
            <p className="details__description">{movie.description}</p>
          </div>
        </section>

        <section className="panel">
          <div className="panel__header">
            <h2 className="panel__title">Trailer</h2>
          </div>

          {movie.trailerEmbedURL ? (
            <div className="video">
              <iframe
                className="video__frame"
                src={movie.trailerEmbedURL}
                title={`${movie.title} trailer`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <p className="empty-state">No trailer link provided.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default MovieDetails;

