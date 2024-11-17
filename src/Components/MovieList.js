import React from 'react';
import { MovieCard } from './MovieCard';  // Correct way to import a named export

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

export default MovieList;
