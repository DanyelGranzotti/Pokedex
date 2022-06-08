import React from "react";

import NavBar from "./NavBar";
import * as S from "../styles/layout/Contacts.styled";

import WebAssetSharpIcon from "@mui/icons-material/WebAssetSharp";
import DraftsSharpIcon from "@mui/icons-material/DraftsSharp";
import PhoneIphoneSharpIcon from "@mui/icons-material/PhoneIphoneSharp";

const Contacts = () => {
  return (
    <>
      <S.Background>
        <NavBar />
        <S.StyledContactSection id="contact">
          <S.SectionHeading>
            <h1>Contato</h1>
            <p>Entre em contato</p>
          </S.SectionHeading>
          <S.DetailsWrapper>
            <S.ContactInfo>
              <p>
                Adoraria se me contactassem. Mesmo que seja só para dizer "Oi!".
              </p>
              <div>
                <a href="https://danyel-granzotti-portifolio.netlify.app/">
                  <WebAssetSharpIcon />
                  <span>Portfólio Web</span>
                </a>

                <a href="mailto:danyelgranzotti@alu.ufc.br">
                  <DraftsSharpIcon />
                  <span>danyelgranzotti@alu.ufc.br</span>
                </a>

                <a href="tel:+5589994019784">
                  <PhoneIphoneSharpIcon />
                  <span>(89)99401-9784</span>
                </a>
              </div>
            </S.ContactInfo>
            <S.ImageWrapper>
              <img src="./img/Contact.svg" alt="contact" />
            </S.ImageWrapper>
          </S.DetailsWrapper>
        </S.StyledContactSection>
        <hr />
      </S.Background>
    </>
  );
};

export default Contacts;
