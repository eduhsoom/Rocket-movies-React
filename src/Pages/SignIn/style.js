import styled from "styled-components";
import backgroundImg  from "../../assets/background.png"



export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;




`;

export const Form = styled.form`

padding: 0 13.6rem;

display: flex;
flex-direction: column;
justify-content:center;

text-align: start;




> h1 {
  color: ${({theme}) => theme.COLORS.BGE};
  font-size: 4.8rem;
  font-weight: bold;
}

> span {

  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: 1.4rem;
  font-weight: 400;
  
}

> p {

  font-weight: medium;
  font-size: 2.4rem;
  margin-top: 4.8rem;
  margin-bottom: 4.8rem;
}


> a {
  margin: 6.4rem auto;
  color: ${({theme}) => theme.COLORS.BGE};


}

`;

export const Background = styled.div`

flex: 1;
background: url(${backgroundImg}) no-repeat center center;
background-size: cover;




`;