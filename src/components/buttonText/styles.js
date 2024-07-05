import styled from "styled-components";
import { Link } from "react-router-dom";



export const Container = styled(Link)`

display: flex;
align-items: center;
background: none;


color: ${({theme}) => theme.COLORS.BGE};

border: none;
font-size: 1.6rem;

> svg {
color: ${({theme}) => theme.COLORS.BGE};
font-size: 3rem;
}
`;