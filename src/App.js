import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import TopRatedPage from './Pages/TopRatedPage';
import UpcomingPage from './Pages/UpcomingPage';
import SingleMoviePage from './Pages/SingleMoviePage';
import SearchedPage from './Pages/SearchedPage';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query); 
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:movieId" element={<SingleMoviePage />} />
        <Route path="/search" element={<SearchedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
