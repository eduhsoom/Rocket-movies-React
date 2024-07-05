import styled from "styled-components";

export const Container = styled.textarea`


width: 100%;
height: 22.7rem;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500} ;
color: ${({ theme }) => theme.COLORS.WHITE};

border: none;

border-radius: .9rem;
resize: none;

padding: 1.9rem 1.6rem;

&::placeholder {
  color: ${({ theme }) => theme.COLORS.GRAY_300} 
  
}

`;