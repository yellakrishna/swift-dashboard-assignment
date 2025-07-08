import React from "react";
import "./Pagination.css";

const Pagination = ({
  total,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
}) => {
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pagination-bar">
      <span className="pagination-info">
        {startIndex + 1}-{endIndex} of {total} items
      </span>

      <div className="pagination-controls">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {[...Array(totalPages)].slice(0, 2).map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              className={`page-button ${currentPage === page ? "active" : ""}`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>

      <select
        className="pagination-select"
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
          setCurrentPage(1);
        }}
      >
        <option value={10}>10 / Page</option>
        <option value={50}>50 / Page</option>
        <option value={100}>100 / Page</option>
      </select>
    </div>
  );
};

export default Pagination;
