import styled, { keyframes } from "styled-components";

const float = keyframes`
from{
  transform: translate(0px, 0px)
}
65%{
  transform: translate(0px, 10px)
}
to{
  transform: translate(0px, 0px)
}
`;

export const Background = styled.div`
  box-sizing: border-box;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    height: 110vh;
  }
`;

export const StyledContactSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  margin-top: 93px;
  padding: 4rem 10rem;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.primary} 0%,
    rgba(255, 255, 255, 0.5895133053221288) 20%,
    rgba(0, 212, 255, 0) 100%
  );
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.textColor500};
  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    padding: 1rem 2rem;
  }
`;

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fonts.size.xxlarge};
  }

  p {
    font-size: ${(props) => props.theme.fonts.size.small};
    margin-bottom: 2rem;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    flex-direction: column-reverse;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  font-size: ${(props) => props.theme.fonts.size.medium};

  p {
    padding: 0;
    margin-bottom: 2rem;
    text-align: justify;
    @media (max-width: ${(props) => props.theme.mobileInPx}) {
      text-align: center;
    }
  }

  div {
    font-size: ${(props) => props.theme.fonts.size.small};

    display: block;
    align-items: center;

    a {
      color: ${(props) => props.theme.colors.textColor500};
      display: flex;
      align-items: center;
      margin: 1rem 0;
      svg {
        margin-right: 0.5rem;
      }
    }

    @media (max-width: ${(props) => props.theme.mobileInPx}) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  img {
    padding-left: 3rem;
    width: 80%;
    animation: ${float} 3s ease-in-out infinite;
  }

  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    justify-content: center;
    margin-bottom: 2rem;
  }
`;
