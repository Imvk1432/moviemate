import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <div className="pagination">
      {currentPage > 1 && <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>}
      <span>{currentPage} / {totalPages}</span>
      {currentPage < totalPages && <button onClick={() => onPageChange(currentPage + 1)}>Next</button>}
    </div>
  );

export default Pagination;
