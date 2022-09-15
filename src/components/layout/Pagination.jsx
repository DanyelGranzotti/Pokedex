import React from "react";

import * as Syled from "../styles/layout/Pagination.styled";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Pagination = (props) => {
  const { page, totalPages, setPage } = props;

  const onLeftClickHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <Syled.Container>
      <button onClick={onLeftClickHandler}>
        <ArrowBackIos />
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClickHandler}>
        <ArrowForwardIos />
      </button>
    </Syled.Container>
  );
};

export default Pagination;
