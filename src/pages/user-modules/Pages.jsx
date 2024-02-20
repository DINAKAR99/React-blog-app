import React from "react";
import "./Pagination.css";
const Pages = ({ TotalPages, postsPerPage, setCurrentPage, currentPage }) => {
  let Pages = [];

  for (let index = 1; index <= Math.ceil(TotalPages / postsPerPage); index++) {
    Pages.push(index);
  }

  return (
    <div className="pagination">
      {Pages.map((eachpage, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(eachpage)}
            className={eachpage == currentPage ? "active" : ""}
          >
            {eachpage}
          </button>
        );
      })}
    </div>
  );
};

export default Pages;
