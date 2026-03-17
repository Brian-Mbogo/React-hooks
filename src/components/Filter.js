import React from 'react';

function Filter({ title, rating, onTitleChange, onRatingChange }) {
  return (
    <section className="filters">
      <div className="field">
        <label className="label" htmlFor="filter-title">
          Title
        </label>
        <input
          id="filter-title"
          className="input"
          type="text"
          value={title}
          placeholder="Search by title..."
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="filter-rating">
          Min rating
        </label>
        <select
          id="filter-rating"
          className="select"
          value={rating}
          onChange={(e) => onRatingChange(Number(e.target.value))}
        >
          <option value={0}>All</option>
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
          <option value={5}>5</option>
        </select>
      </div>
    </section>
  );
}

export default Filter;

