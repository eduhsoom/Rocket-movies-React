import { createGlobalStyle } from "styled-components";

export  const GlobalStyles = createGlobalStyle`

* { 
margin: 0;
padding: 0;

box-sizing: border-box;

}


:root {
font-size: 62.5%;


}


body {

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  

  -webkit-font-smoothing: antialiased;
  
  ::-webkit-scrollbar {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    width: .7rem;

    height: 1px;
  }
  
  ::-webkit-scrollbar-corner {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    
  }
  
  ::-webkit-scrollbar-thumb   {
    background-color: ${({theme}) => theme.COLORS.BGE};
    border-radius: .8rem;



}


}


body, input, textarea, button {
  font-family: "Roboto Slab", serif;
  font-size: 1.6rem;
  outline: none;

}


a {

  text-decoration: none;

}


a, button {
cursor: pointer;
transition: filter 0.2s;

}

a:hover , button:hover {
cursor: pointer;
filter: brightness(0.7);

}

`;