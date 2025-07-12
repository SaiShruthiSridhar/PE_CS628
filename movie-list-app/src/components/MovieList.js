import React, { useState } from 'react';
import './MovieList.css';

const rawFilms = [
  ['Inception', 'Science Fiction', 2010],
  ['The Shawshank Redemption', 'Drama', 1994],
  ['The Dark Knight', 'Action', 2008],
];

const filmLibrary = rawFilms.map(([title, genre, yearOfRelease]) => ({
  title,
  genre,
  yearOfRelease,
}));


const FilmBrowser = () => {
  const [genreChoice, updateGenreChoice] = useState('All Genres');

  const genreCategories = ['All Genres', ...new Set(filmLibrary.map(film => film.genre))];

  const filmsFiltered = genreChoice === 'All Genres'
    ? filmLibrary
    : filmLibrary.filter(film => film.genre === genreChoice);

  const handleFilmClick = (title) => {
    alert(`You clicked on "${title}"`);
  };

  return (
    <div className="movie-tile">
      <h2>Movie List</h2>
      <select onChange={(e) => updateGenreChoice(e.target.value)} value={genreChoice}>
        {genreCategories.map((genre, idx) => (
          <option key={idx} value={genre}>{genre}</option>
        ))}
      </select>

      {filmsFiltered.map((film, index) => (
        <div className="movie-card" key={index} onClick={() => handleFilmClick(film.title)}>
          <h3>{film.title}</h3>
          <p>{film.genre}</p>
          <p>Released: {film.yearOfRelease}</p>
        </div>
      ))}
    </div>
  );
};

export default FilmBrowser;
