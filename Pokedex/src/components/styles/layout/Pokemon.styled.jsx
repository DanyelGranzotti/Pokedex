import styled from "styled-components";
import { BackgroundColor } from "../../utils/BackgroundColor";

import StraightenIcon from "@mui/icons-material/Straighten";

export const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MainContainer = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: calc(100% - 186px);
  padding: 93px 0;
  font-family: ${(props) => props.theme.fonts.primary};
  background-color: ${(props) => BackgroundColor(props)};

  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    height: fit-content;
  }
`;

export const Info = styled.div`
  margin: 20px 0;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  height: fit-content;
  padding: 0 2em;
  justify-content: space-between;
`;

export const IdHolder = styled.p`
  margin: 0;
  width: fit-content;
  text-align: right;
  font-size: ${(props) => props.theme.fonts.size.xxlarge};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    font-size: ${(props) => props.theme.fonts.size.large};
  }
`;

export const Name = styled.p`
  width: fit-content;
  height: fit-content;
  margin: 0;
  font-size: ${(props) => props.theme.fonts.size.ultralarge};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    font-size: ${(props) => props.theme.fonts.size.xxxlarge};
  }
`;

export const Types = styled.ul`
  padding: 0 2em;
  list-style: none;
  display: flex;
  justify-content: left;
  align-items: left;
  margin: 0;
`;

export const Type = styled.li`
  margin-right: 0.5em;
  font-size: ${(props) => props.theme.fonts.size.medium};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  width: fit-content;
  border-radius: 38px;
  background-color: ${(props) => props.theme.colors.textTransparentWhite};
  padding: 0.2rem 1rem;
`;

// Content
export const Sprite = styled.img`
  positon: relative;
  margin: 0 auto;
  width: 30%;
  z-index: 0;
  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    width: 60%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  background-color: ${(props) => props.theme.colors.textTransparentWhite};
  font-size: ${(props) => props.theme.fonts.size.small};
  color: ${(props) => props.theme.colors.textColor500};

  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    width: 100%;
    text-align: center;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
  aspect-ratio: 2 / 1;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    width: 90%;
    flex-direction: column;
    aspect-ratio: 1 / 2;
  }
`;

export const DescriptionText = styled.p`
  margin: 0;
  text-align: center;
  width: fit-content;
  padding: 0.5em;
  font-size: ${(props) => props.theme.fonts.size.medium};
`;

export const Mains = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 0 2em;
  margin: 0;
  list-style: none;
`;

export const Main = styled.li`
  margin-top: 1rem;
  width 30%;
  border-right: 1px solid ${(props) => props.theme.colors.shadowStrong};
`;

export const MainMove = styled.li`
  width 30%;
  margin: 1em;
  margin: auto 0;
`;

export const StatsMainContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  margin: auto 0;
`;

export const CustomStraightenIcon = styled(StraightenIcon)`
  transform: rotate(90deg);
`;

export const MainTextContainer = styled.p`
  margin: 0;
  align-self: flex-end;
`;

export const SubtitleMain = styled.p`
  font-size: ${(props) => props.theme.fonts.size.xsmall};
  color: ${(props) => props.theme.colors.textColor300};
`;

export const Gender = styled.div`
  width: 90%;
  display: flex;
  item-align: center;
  text-align: left;
`;

export const GenderTitle = styled.p`
  width: 30%;
  margin: 1rem 0;
  text-align: left;
  align-self: flex-end;
`;

export const GenderRate = styled.div`
  display: flex;
  width: 30%;
  margin: 1rem 0;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
`;

export const GenderText = styled.p`
  margin: 0;
  align-self: flex-end;
`;

export const Stats = styled.table`
  width: 90%;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: left;
  item-align: left;
  text-align: left;
`;

export const StatsHolder = styled.tr``;

export const StatsDescription = styled.td`
  width: 130px;
`;

export const StatsValor = styled.td`
  width: 40px;
  text-align: center;
`;

export const Graph = styled.td`
  width: 70%;
  @media (max-width: ${(props) => props.theme.mobileInPx}) {
    width: 60%;
  }
`;
