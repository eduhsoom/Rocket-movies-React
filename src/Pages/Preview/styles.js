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


> .button {

}


> main {
  grid-area: "content";
  padding: 4rem 11rem ;
  overflow-y: auto;
  
}






`;

export const Content = styled.div`

margin-top: 2.4rem;


max-width: 100%;

> .button {
margin-right: 11rem;

}


h1 {
margin-bottom: 2.5rem;

}

> .for {
  
display: flex;
align-items: center;
gap: .8rem;

margin-bottom: 4rem;

 > img {
    height: 1.6rem;
    width: 1.6rem;
   border-radius: 50%;
  
  }
 
 
 svg {
    color: ${({theme}) => theme.COLORS.BGE};
line-height:1.6rem;
  margin-right: .4rem;
  }
  

> span {
display: flex;
align-items: center;
line-height: 1.6rem;

}

}

> .by{
margin-bottom: 4.8rem;

}


> .tags {
  margin-bottom: 4.8rem;

}

> p {

text-align: justify;
  font-size: 2.35rem;
  font-weight: 400;
}


`;