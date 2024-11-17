import React from 'react';
import { useNavigate } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  console.log(movie);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      className="movie-card"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://via.placeholder.com/500x750.png?text=No+Poster'
        }
        alt={movie.title}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
      

    </div>
  );
};


