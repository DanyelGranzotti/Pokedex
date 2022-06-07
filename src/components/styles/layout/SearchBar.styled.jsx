import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  height: 53px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 40px;
  box-shadow: 4px 4px 16px ${(props) => props.theme.colors.shadow};
`;

export const Input = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  vertical-align: top;
  text-align: left;
  background-color: transparent;
  font-size: ${(props) => props.theme.fonts.size.medium};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  color: ${(props) => props.theme.colors.textColor500};
  font-family: ${(props) => props.theme.fonts.secondary};
  padding: 0px 20px;
  outline: none;
`;

export const Button = styled.button`
  width: 10%;
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: ${(props) => props.theme.fonts.size.medium};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  color: ${(props) => props.theme.colors.textColor500};

  &:hover {
    font-weight: ${(props) => props.theme.fonts.weight.bold};
    cursor: pointer;
  }
`;
