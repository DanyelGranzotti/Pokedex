import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 

/* Custom ScrollBar */

::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-track{
    background: #7a8ba9;
}
::-webkit-scrollbar-thumb{
    background: #31435f;
    border-radius: 30px;
}
::-webkit-scrollbar-thumb:hover{
    background: #202e46;
}
`;
