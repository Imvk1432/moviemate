import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    onSearch(query); 
    navigate(`/search?query=${encodeURIComponent(query)}`); 
  };

  return (
    <nav className="navbar">
      <Link to="/" id='logo'>MovieMate</Link>
      <Link to="/">Popular</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>
      <SearchBar onSearch={handleSearch} />
    </nav>
  );
};

export default Navbar;
