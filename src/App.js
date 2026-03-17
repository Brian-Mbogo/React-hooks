import React, { useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Filter from './components/Filter';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import './App.css';

const initialMovies = [
  {
    id: '1',
    title: 'Inception',
    description:
      'A thief who steals corporate secrets through dream-sharing technology is given an inverse task.',
    posterURL: '/posters/inception.jpg',
    trailerEmbedURL: 'https://www.youtube.com/embed/YoHD9XEInc0',
    rating: 4.8,
  },
  {
    id: '2',
    title: 'The Dark Knight',
    description:
      'Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy.',
    posterURL: '/posters/dark-knight.jpg',
    trailerEmbedURL: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    rating: 4.9,
  },
  {
    id: '3',
    title: 'Interstellar',
    description:
      'A team travels through a wormhole in space in an attempt to ensure humanity’s survival.',
    posterURL: '/posters/interstellar.jpg',
    trailerEmbedURL: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    rating: 4.7,
  },
];

const emptyMovie = {
  title: '',
  description: '',
  posterURL: '',
  trailerEmbedURL: '',
  rating: 3,
};

function createId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return String(Date.now());
}

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);
  const [newMovie, setNewMovie] = useState(emptyMovie);

  const filteredMovies = useMemo(() => {
    const titleNeedle = filterTitle.trim().toLowerCase();

    return movies.filter((movie) => {
      const matchesTitle =
        titleNeedle.length === 0 ||
        movie.title.toLowerCase().includes(titleNeedle);
      const matchesRating = Number(movie.rating) >= Number(filterRating);
      return matchesTitle && matchesRating;
    });
  }, [movies, filterTitle, filterRating]);

  function updateNewMovie(patch) {
    setNewMovie((prev) => ({ ...prev, ...patch }));
  }

  function handleAddMovie(e) {
    e.preventDefault();

    const title = newMovie.title.trim();
    const description = newMovie.description.trim();
    const posterURL = newMovie.posterURL.trim();
    const trailerEmbedURL = newMovie.trailerEmbedURL.trim();
    const rating = Number(newMovie.rating);

    if (!title || !description || !trailerEmbedURL) {
      window.alert('Please enter a title, description, and trailer link.');
      return;
    }

    if (Number.isNaN(rating) || rating < 0 || rating > 5) {
      window.alert('Rating must be a number between 0 and 5.');
      return;
    }

    const movieToAdd = {
      id: createId(),
      title,
      description,
      posterURL,
      trailerEmbedURL,
      rating,
    };

    setMovies((prev) => [movieToAdd, ...prev]);
    setNewMovie(emptyMovie);
  }

  function HomeView() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Movie App (React Hooks)</h1>
          <p className="app__subtitle">
            Add movies and filter by title and rating.
          </p>
        </header>

        <main className="app__main">
          <section className="panel">
            <h2 className="panel__title">Add a new movie</h2>

            <form className="form" onSubmit={handleAddMovie}>
              <div className="field">
                <label className="label" htmlFor="new-title">
                  Title
                </label>
                <input
                  id="new-title"
                  className="input"
                  value={newMovie.title}
                  onChange={(e) => updateNewMovie({ title: e.target.value })}
                  placeholder="Movie title"
                  required
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="new-description">
                  Description
                </label>
                <textarea
                  id="new-description"
                  className="textarea"
                  value={newMovie.description}
                  onChange={(e) =>
                    updateNewMovie({ description: e.target.value })
                  }
                  placeholder="Short description..."
                  rows={3}
                  required
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="new-poster">
                  Poster URL
                </label>
                <input
                  id="new-poster"
                  className="input"
                  value={newMovie.posterURL}
                  onChange={(e) =>
                    updateNewMovie({ posterURL: e.target.value })
                  }
                  placeholder="/posters/my-movie.jpg or https://..."
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="new-trailer">
                  Trailer (embed URL)
                </label>
                <input
                  id="new-trailer"
                  className="input"
                  value={newMovie.trailerEmbedURL}
                  onChange={(e) =>
                    updateNewMovie({ trailerEmbedURL: e.target.value })
                  }
                  placeholder="https://www.youtube.com/embed/..."
                  required
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="new-rating">
                  Rating (0–5)
                </label>
                <input
                  id="new-rating"
                  className="input"
                  type="number"
                  min={0}
                  max={5}
                  step={0.1}
                  value={newMovie.rating}
                  onChange={(e) => updateNewMovie({ rating: e.target.value })}
                />
              </div>

              <button className="button" type="submit">
                Add movie
              </button>
            </form>
          </section>

          <section className="panel">
            <div className="panel__header">
              <h2 className="panel__title">Movies</h2>
              <span className="badge">{filteredMovies.length}</span>
            </div>

            <Filter
              title={filterTitle}
              rating={filterRating}
              onTitleChange={setFilterTitle}
              onRatingChange={setFilterRating}
            />
            <MovieList movies={filteredMovies} />
          </section>
        </main>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

