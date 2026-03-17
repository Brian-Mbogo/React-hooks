# React Hooks Movie App

A small React app that demonstrates **React Hooks** by building a movie list where you can:

- Add a new movie
- Filter movies by **title** and **minimum rating**

## Movie attributes

Every movie in the app uses these attributes:

- `title`
- `description`
- `posterURL`
- `rating`

## Components

- `src/components/MovieCard.js` — displays one movie (poster, title, description, rating)
- `src/components/MovieList.js` — renders a list of `MovieCard` components
- `src/components/Filter.js` — filters by title and minimum rating

## Hooks / concepts used

- `useState` for state (movies, filters, add-movie form)
- `useMemo` to compute the filtered list efficiently
- Controlled inputs (form + filters)
- Props + component composition (`App` → `Filter` / `MovieList` → `MovieCard`)

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
    MovieList.js
public/
  index.html
  poster-placeholder.jpg
```
