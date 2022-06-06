import styled from "styled-components";
import { Link } from "react-router-dom";
import { BackgroundColor } from "../../utils/BackgroundColor";

export const PokemonCardHolder = styled(Link)`
  text-decoration: none;
  width: 10vw;
  min-width: 180px;
  height: 110px;
  padding: 0.7rem;
  margin: 0.5rem;
  border-radius: 15px;
  background-color: ${(props) => BackgroundColor(props)};
  font-family: ${(props) => props.theme.fonts.secondary};
`;

export const IdHolder = styled.div`
  width: 100%;

  text-align: right;
  font-size: ${(props) => props.theme.fonts.size.medium};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  color: ${(props) => props.theme.colors.textTransparent};
`;

export const Content = styled.div`
  display: flex;
  height: calc(100% - 30px);
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: left;
  align-items: left;
  width: 70%;
`;

export const Name = styled.div`
  text-decoration: none;
  font-size: ${(props) => props.theme.fonts.size.large};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  color: ${(props) => props.theme.colors.primary};
`;

export const Types = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 0;
  margin: 0;
`;

export const Type = styled.li`
  margin: 3px 0;
  font-size: ${(props) => props.theme.fonts.size.xsmall};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  width: fit-content;
  border-radius: 38px;
  background-color: ${(props) => props.theme.colors.textTransparentWhite};
  padding: 0.2rem 1rem;
`;

export const Sprite = styled.img`
  width: 69px;
`;
