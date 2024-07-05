import styled from "styled-components";

export const Container = styled.div`

width: 100%;
  display: flex;
  align-items: center;
margin-bottom: .8rem;
border-radius: .8rem;
border: 0;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500} ;
color: ${({ theme }) => theme.COLORS.GRAY_300};
  

  > input {
    height: 56px;
    width: 100%;

    padding: 1.9rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300} 
    }
  }


> svg {
margin-left: 1.6rem;

}

`;