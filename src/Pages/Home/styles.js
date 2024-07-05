import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 13.6rem 10.6rem auto;
grid-template-areas: 
"header"
"title"
"content"
;


> main {
  grid-area: "content";
  padding: 5rem 13rem 0 13rem ;
  overflow-y: auto;
  
}


> .title{

  padding: 5rem 13rem;

 width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

}
`

export const Content= styled.div`

max-width: 100%;


`;

export const Button = styled(Link)`
display: flex;
align-items: center;
padding: 1.3rem 3.2rem;
background: ${({theme}) => theme.COLORS.BGE};
color: ${({theme}) => theme.COLORS.BACKGROUND_600};

border: none;
border-radius: .8rem;

> svg {

margin-right: .3rem;
}


`;