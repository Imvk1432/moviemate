import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from '../Components/MovieList';

const SearchedPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}`
      )
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
    }
  }, [query]);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchedPage;
