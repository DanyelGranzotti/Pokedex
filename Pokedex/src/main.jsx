import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Pokemon from "./components/layout/Pokemon";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Globals.styled";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const theme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#F2F2F2",
    shadow: "rgba(1, 28, 64, 0.2)",
    shadowStrong: "rgba(1, 28, 64, 0.5)",
    textTransparent: "rgba(0, 0, 0, 0.25)",
    textTransparentWhite: "rgba(255, 255, 255, 0.25)",
    textColor300: "#212121CC",
    textColor500: "#171414",
  },
  fonts: {
    primary: "'Open Sans', sans-serif",
    secondary: "'Inter', sans-serif",
    size: {
      xsmall: "0.8rem",
      small: "1rem",
      regular: "1.2rem",
      medium: "1.4rem",
      large: "1.6rem",
      xlarge: "1.8rem",
      xxlarge: "2rem",
      xxxlarge: "2.4rem",
      ultralarge: "3rem",
    },
    weight: {
      thin: "100",
      light: "300",
      regular: "400",
      medium: "500",
      bold: "700",
      black: "900",
    },
  },
  mobile: 768,
  mobileInPx: "768px",
  transition: "opacity 0.5s ease-in-out",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:id" element={<Pokemon />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
