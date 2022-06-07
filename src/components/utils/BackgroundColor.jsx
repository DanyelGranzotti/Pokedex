import React from "react";

export const BackgroundColor = (props) => {
  let { type } = props;
  switch (type) {
    case "grass":
      return "#46D7AB";
    case "fire":
      return "#FB6C6C";
    case "water":
      return "#6890f0";
    case "bug":
      return "#468DA4";
    case "poison":
      return "#a040a0";
    case "flying":
      return "#4676A4";
    case "electric":
      return "#FFCE4B";
    case "ground":
      return "#e0c068";
    case "fairy":
      return "#F2CDD6";
    case "fighting":
      return "#c03028";
    case "psychic":
      return "#46A487";
    case "rock":
      return "#b8a038";
    case "ghost":
      return "#393332";
    case "dragon":
      return "#7038f8";
    case "dark":
      return "#705848";
    case "steel":
      return "#b8b8d0";
    case "ice":
      return "#98d8d8";

    default:
      return "#D5DBDB";
  }
};
