import styled from "styled-components";

export const Container = styled.span`
font-size: 1.2rem;
padding: .5rem 1.6rem;
border-radius: .9rem;
margin-right: .6rem;

background: ${({theme}) => theme.COLORS.BACKGROUND_800};

color: ${({theme}) => theme.COLORS.TEXT_TAG};

`;