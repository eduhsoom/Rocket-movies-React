import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.header`
grid-area: header;


height: 13.6rem;
width: 100%;

border-bottom-width: .1rem;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

display: flex;
justify-content: space-between;
align-items: center;

padding: 2.4rem 12.3rem;


> h1 {

  margin-right: 6.4rem;
  color: ${({theme}) => theme.COLORS.BGE};

}

`;


export const Profile = styled.div`
display: flex;
align-items: center;

> img {
width: 6.4rem;
height: 6.4rem;

border-radius: 50%;
}


> div {
 
  width: 10rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  
  margin-right: 1rem;
 margin-left: 6.4rem;



span a {
font-size: 1.4rem;
color: ${({theme}) => theme.COLORS.GRAY_100};

}



a {
font-size: 1.6rem;
color: ${({theme}) => theme.COLORS.WHITE};

}


} 


`;

