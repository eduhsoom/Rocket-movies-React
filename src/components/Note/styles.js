import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`

width: 100%;
display: block;

border: none;
background: ${({theme}) => theme.COLORS.BACKGROUND_400};
border-radius: 1rem;

padding: 3.2rem;
margin-bottom: 2.4rem;




 h1 {
  color: ${({theme}) => theme.COLORS.WHITE};
  text-align: left;
  font-weight: 700;
  font-size: 2.4rem;
  align-items: center;


}

> p {
  margin-top: 1.5rem;
  text-align: justify;
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: 1.65rem;
  font-weight: 400;

}

> footer {
  width: 100%;
  display: flex;
  margin-top: 2.4rem;
}

`;