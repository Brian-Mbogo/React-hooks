# Project TODO / Steps Log

This file summarizes what was done in each checkpoint while building this React Hooks Movie App.

## Checkpoint 1 — Base movie app (React Hooks)

- Created the core components:
  - `src/components/MovieCard.js` (display a single movie)
  - `src/components/MovieList.js` (render a list of movies)
  - `src/components/Filter.js` (filter by title + minimum rating)
- Defined the movie object structure:
  - `title`, `description`, `posterURL`, `rating`
- Added functionality in `src/App.js`:
  - Store movies in state (`useState`)
  - Add a new movie using a controlled form
  - Filter movies by title and rating
  - Compute filtered list using `useMemo`
- Added UI styling in:
  - `src/App.css`
  - `src/index.css`
- Added documentation in `README.md`.

## Checkpoint 2 — Posters in `public/`

- Added local poster images:
  - `public/posters/inception.jpg`
  - `public/posters/dark-knight.jpg`
  - `public/posters/interstellar.jpg`
- Added a default fallback poster:
  - `public/poster-placeholder.jpg`
- Updated `src/App.js` to use local poster paths like:
  - `/posters/inception.jpg`
- Updated `src/components/MovieCard.js` to fall back to `/poster-placeholder.jpg` when no poster is provided or the image fails to load.

## Checkpoint 3 — Routing (React Router)

- Installed React Router:
  - `react-router-dom`
- Wrapped the app with the router in `src/index.js`:
  - `BrowserRouter`
- Updated the movie model to include:
  - `trailerEmbedURL` (YouTube embed link)
- Added details page:
  - `src/components/MovieDetails.js` (shows description + embedded trailer + back link)
- Added routes in `src/App.js`:
  - `/` home page
  - `/movie/:id` details page
- Made movie cards clickable:
  - `MovieList` links each movie to `/movie/<id>`
- Updated styles for details and links in `src/App.css`.
- Updated documentation in `README.md`.

## Next improvements (optional)

- Validate that `trailerEmbedURL` is a real embed link (YouTube only).
- Allow uploading/choosing a local poster file (instead of typing a URL).
- Add edit/delete movie actions.
- Add a “Not Found” page with better UI.

