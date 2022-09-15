import styled from "styled-components";

export const PokedexHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    width: 90%;
  }
`;
