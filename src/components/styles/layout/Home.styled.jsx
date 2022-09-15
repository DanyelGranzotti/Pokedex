import styled from "styled-components";
import { Link } from "react-router-dom";

export const Body = styled.body`
  box-sizing: border-box;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Container = styled.main`
  width: 100%;
  height: calc(100%-93px);
  padding-top: 93px;
`;

export const MainContainer = styled.div`
  box-sizing: border-box;
  width: 35%;
  padding: 4rem 0;
  margin-left: 10%;
  color: ${(props) => props.theme.colors.textColor400};
  font-family: ${(props) => props.theme.fonts.secondary};
  display: inline-block;
  vertical-align: top;
  p {
    margin: 0;
  }

  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    padding: 1rem 2rem;
    width: 100%;
    height: 40%;
  }
`;

export const Main = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }
`;

export const ImageHolder = styled.div`
  box-sizing: border-box;
  padding-top: 4rem;
  width: 55%;
  height: 100%;
  display: inline-block;
  overflow: hidden;
  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    width: 100%;
    paddin: 0;
    height: 60%;
  }
`;

export const Image = styled.img`
  width: 110%;
  z-index: 0;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fonts.size.ultralarge};
  font-height: 76px;
  font-weight: ${(props) => props.theme.fonts.weight.extraBold};
  margin: 10px;
  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    font-size: ${(props) => props.theme.fonts.size.xxxlarge};
    font-weight: ${(props) => props.theme.fonts.weight.bold};
  }
`;

export const Text = styled.p`
  width: 75%;
  font-size: ${(props) => props.theme.fonts.size.small};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  line-height: ${(props) => props.theme.fonts.size.xxlarge};
  color: ${(props) => props.theme.colors.textColor400};
  padding: 0 15px;
  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    font-size: ${(props) => props.theme.fonts.size.xsmall};
    font-weight: ${(props) => props.theme.fonts.weight.light};
  }
`;

export const CustomSpam = styled.span`
  // background-color: ${(props) => props.theme.colors.yellow};
  background: linear-gradient(
    0,
    ${(props) => props.theme.colors.yellow} 50%,
    #ffffff 50%
  );
`;

export const Button = styled(Link)`
  box-sizing: border-box;
  width: 190px;
  height: 100%;
  text-decoration: none;
  margin: 20px 10px;
  text-align: center;
  z-index: 1;

  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.blue};
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  padding: 20px 10px;
`;
