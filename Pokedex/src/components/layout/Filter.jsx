import React from "react";
import * as S from "../styles/layout/Filter.styled";

const Filter = (props) => {
  const { onFilterChange } = props;

  return (
    <S.FilterContainer>
      <S.Select onChange={onFilterChange}>
        <S.Option disabled selected value="">
          Tipo
        </S.Option>
        <S.Option value="">Todos</S.Option>
        <S.Option value="fire">Fogo</S.Option>
        <S.Option value="grass">Planta</S.Option>
        <S.Option value="electric">Eletrico</S.Option>
        <S.Option value="water">Água</S.Option>
        <S.Option value="normal">Normal</S.Option>
      </S.Select>
    </S.FilterContainer>
  );
};

export default Filter;
