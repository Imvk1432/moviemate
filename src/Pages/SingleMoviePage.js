import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleMoviePage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch movie details');
        }
        return res.json();
      })
      .then((data) => setMovieDetails(data))
      .catch((err) => setError(err.message)); 

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch cast details');
        }
        return res.json();
      })
      .then((data) => setCast(data.cast))
      .catch((err) => setError(err.message));
  }, [movieId]);

  if (error) {
    return <div>Error: {error}</div>; 
  }

  if (!movieDetails.title) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      
      <div className="movie-details">
            <div className="left-side">
              <img
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`
                    : 'https://via.placeholder.com/200x300.png?text=No+Poster' 
                }
                alt={movieDetails.title}
                className="small-poster"
              />
            </div>
            <div className='overview'>
            <p id='overview'><strong><h3>Overview:</h3> <br /></strong> {movieDetails.overview}</p>

            </div>
            <div className="right-side">
              <img
                src={
                  movieDetails.backdrop_path
                    ? `https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`
                    : 'https://via.placeholder.com/1280x720.png?text=No+Backdrop' 
                }
                alt={movieDetails.title}
                className="large-poster"
              />
            </div>
            <div className="movie-info">
              <h2>{movieDetails.title}</h2>
                <p><strong>Rating:</strong> {movieDetails.vote_average} / 10</p>
                <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
                <p><strong>Runtime:</strong> {movieDetails.runtime} minutes</p>
                <p><strong>Genres:</strong> {movieDetails.genres ? movieDetails.genres.map((genre) => genre.name).join(', ') : 'N/A'}</p>
            
            </div>
          
      
      </div>

      

      <h2>Cast:</h2>
      <div className="cast-list">
        {cast.length > 0 ? (
          cast.map((actor) => (
            <div key={actor.id} className="actor">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : 'https://via.placeholder.com/200x300.png?text=No+Image'
                }
                alt={actor.name}
                className="actor-image"
              />
              <p>{actor.name}</p>
            </div>
          ))
        ) : (
          <p>No cast available</p>
        )}
      </div>
    </div>
  );
};

export default SingleMoviePage;
