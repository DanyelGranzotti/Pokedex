import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 75vw;
  height: 23px;
  margin: 36px auto;
  background-color: transparent;
`;

export const Select = styled.select`
  width: 15%;
  height: 100%;
  border: none;
  vertical-align: top;
  text-align: center;
  padding: 0.1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: ${(props) => props.theme.transition};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fonts.size.small};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  color: ${(props) => props.theme.colors.textColor500};
  border-radius: 4px;
  outline: none;
  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    width: 30%;
  }
`;

export const Option = styled.option`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textColor500};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fonts.size.small};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  border-radius: 4px;
  outline: none;
`;
