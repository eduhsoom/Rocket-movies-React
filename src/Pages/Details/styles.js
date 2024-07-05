import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;


display: grid;
grid-template-rows: 13.6rem auto;
grid-template-areas: 
"header"
"content"
;

> main {
  grid-area: "content";
  padding: 4rem 11rem ;
  overflow-y: auto;
  
  
}


 .tags{
display: flex;
gap: 2.4rem;
flex-wrap: wrap;
align-items: center;

background: ${({theme}) => theme.COLORS.BACKGROUND_600};
padding: 1.6rem;
border-radius: .9rem;
}

`;

export const Content = styled.div`

max-width: 100%;

overflow: auto;







> h1 {
  margin-top: 2.4rem;
}

> .Input{

margin-top: 4rem;
margin-bottom: 4rem;

display: flex;
gap: 4rem;

}


>.Button{
  display: flex;

}

>.Button button:nth-child(1){
background: ${({theme}) => theme.COLORS.BACKGROUND_600};
color: ${({theme}) => theme.COLORS.BGE};
margin-right: 4rem;
}



`;