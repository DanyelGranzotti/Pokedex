import React from "react";

import NavBar from "./NavBar";

import * as S from "../styles/layout/Home.styled";

const Home = () => {
  return (
    <>
      <S.Body>
        <NavBar />
        <S.Container>
          <S.MainContainer>
            <S.Main>
              <S.Title>
                Qual pokemon você <S.CustomSpam>escolheria</S.CustomSpam>?
              </S.Title>
              <S.Text>
                Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
                habilidades.
              </S.Text>
              <S.Button to="/pokemons">Veja os pokemons</S.Button>
            </S.Main>
          </S.MainContainer>
          <S.ImageHolder>
            <S.Image
              src="/img/Home.svg"
              alt="pokemon"
              figcaption="Imagem ilustrativa do pokemon Pikachu lançando uma pokebola"
            ></S.Image>
          </S.ImageHolder>
        </S.Container>
      </S.Body>
    </>
  );
};

export default Home;
