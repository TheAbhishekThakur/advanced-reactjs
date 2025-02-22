"use client";
import "./style.css";

const Pagination = ({
  onNext,
  onPrev,
  currentPage,
  numOfPages,
  setCurrentPage,
}) => {
  return (
    <div className="page-container">
      <button
        disabled={currentPage === 0}
        className="page-number"
        onClick={onPrev}
      >
        ◀️
      </button>
      {[...Array(numOfPages).keys()].map((pageNum) => (
        <span
          key={pageNum}
          className={`page-number ${currentPage === pageNum && "active"}`}
          onClick={() => setCurrentPage(pageNum)}
        >
          {pageNum}
        </span>
      ))}
      <button
        disabled={currentPage === numOfPages - 1}
        className="page-number"
        onClick={onNext}
      >
        ▶
      </button>
    </div>
  );
};
export default Pagination;
