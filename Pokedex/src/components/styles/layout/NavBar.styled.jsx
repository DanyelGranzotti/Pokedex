import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
   {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 93px;
    background: ${(props) => props.theme.colors.primary};
    box-shadow: 0 4px 16px ${(props) => props.theme.colors.shadow};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Logo = styled.img`
  width: 159px;
  height: 60px;
  margin-left: 10vw;
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 93px;
  margin-right: 20vw;
`;

export const NavItem = styled.li`
  list-style: none;
  margin-left: 20px;
  font-size: ${(props) => props.theme.fonts.size.medium};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textColor500};
  transition: ${(props) => props.theme.transition};
  font-family: ${(props) => props.theme.fonts.primary};

  &:hover {
    font-weight: ${(props) => props.theme.fonts.weight.bold};
    border-bottom: 3px solid ${(props) => props.theme.colors.textColor500};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textColor500};
  &:hover {
    font-weight: ${(props) => props.theme.fonts.weight.bold};
    border-bottom: 3px solid ${(props) => props.theme.colors.textColor500};
  }
`;
