# React Hooks Movie App

A small React app that demonstrates **React Hooks** and **React Router** by building a movie list where you can:

- Add a new movie
- Filter movies by **title** and **minimum rating**
- Click a movie card to view its **description** and **trailer**

## Movie attributes

Every movie in the app uses these attributes:

- `title`
- `description`
- `posterURL`
- `trailerEmbedURL`
- `rating`

## Routes

- `/` Home page (add + filter + list)
- `/movie/:id` Movie details page (description + trailer + back to home)

## Components

- `src/components/MovieCard.js` — displays one movie and links to details
- `src/components/MovieList.js` — renders a list of `MovieCard` components
- `src/components/Filter.js` — filters by title and minimum rating
- `src/components/MovieDetails.js` — movie details view (description + trailer)

## Hooks / concepts used

- `useState` for state (movies, filters, add-movie form)
- `useMemo` to compute the filtered list efficiently
- Controlled inputs (form + filters)
- Props + component composition (`App` → `Filter` / `MovieList` → `MovieCard`)

## Trailer link format

Use an **embed** URL, for example:

- `https://www.youtube.com/embed/VIDEO_ID`

## Run locally

1. Install dependencies:
   - `npm install` (if PowerShell blocks `npm`, use `npm.cmd install`)
2. Start the dev server:
   - `npm start` (or `npm.cmd start`)

Then open the URL shown in your terminal (usually `http://localhost:3000`).

## Project structure

```
src/
  App.js
  App.css
  index.js
  index.css
  components/
    Filter.js
    MovieCard.js
    MovieDetails.js
    MovieList.js
public/
  index.html
  poster-placeholder.jpg
  posters/
    inception.jpg
    dark-knight.jpg
    interstellar.jpg
```

