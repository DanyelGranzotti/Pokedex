import React from "react";

const Pagination = (props) => {
  const { page, totalPages, onNextClick, onPreviousClick } = props;

  return (
    <div>
      <button onClick={onPreviousClick}>Previous</button>
      <div>
        {page} of {totalPages}
      </div>
      <button onClick={onNextClick}>Next</button>
    </div>
  );
};

export default Pagination;
