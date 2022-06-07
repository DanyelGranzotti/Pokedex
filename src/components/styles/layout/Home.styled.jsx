import styled from "styled-components";

export const MainContainer = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 93px 0;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 73px;
  margin-bottom: 33px;
  font-size: ${(props) => props.theme.fonts.size.xxlarge};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  color: ${(props) => props.theme.colors.textColor500};
  font-family: ${(props) => props.theme.fonts.secondary};
`;
