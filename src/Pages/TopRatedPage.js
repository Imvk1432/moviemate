import React, { useEffect, useState } from 'react';
import MovieList from '../Components/MovieList';
import Pagination from '../Components/Pagination';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [currentPage]);

  return (
    <div>
      <MovieList movies={movies} />
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
    </div>
  );
};

export default TopRatedPage;
