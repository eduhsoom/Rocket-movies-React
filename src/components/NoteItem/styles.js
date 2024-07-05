import styled from "styled-components";

export const Container = styled.div`

display: flex;
align-items: center;


background-color: ${({theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900 };
color: ${({theme }) =>  theme.COLORS.GRAY_300 };

border: ${({theme, isNew }) => isNew ? `.2rem dashed ${theme.COLORS.GRAY_300 }`: "none"};
border-radius: 10px;
padding-right: 16px;

> button{
  border: none;
  background: none;
}


.button-delete{
color:${({theme}) => theme.COLORS.BGE };

}

.button-add{
color:${({theme}) => theme.COLORS.BGE };

}


> input {
  color: ${({theme}) => theme.COLORS.WHITE};
  background: transparent;
  width: 100%;
  height: 5.6rem;
  border: none;

  padding: 1.2rem;


&::placeholder {
  color:${({theme})=>theme.COLORS.BACKGROUND_300};

}

}



`;