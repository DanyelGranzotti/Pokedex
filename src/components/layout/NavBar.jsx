import React from "react";

import * as S from "../styles/layout/NavBar.styled";

const NavBar = () => {
  return (
    <>
      <S.NavBar>
        <S.LogoContainer to="/">
          <S.Logo src="/img/logo.svg" alt="pokemon-logo" />
        </S.LogoContainer>
        <S.Nav>
          <S.NavItem>Home</S.NavItem>
          <S.NavItem>
            <S.StyledLink to="/">Pokemons</S.StyledLink>
          </S.NavItem>
          <S.NavItem>Contato</S.NavItem>
        </S.Nav>
      </S.NavBar>
    </>
  );
};

export default NavBar;
