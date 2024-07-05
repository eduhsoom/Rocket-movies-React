import styled from "styled-components";

export const Container = styled.div`
width: 100%;



> header {
width: 100%;
height: 14.4rem;

display: flex;
align-items: center;

padding: 0 12.4rem;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};

}


`;

export const Form = styled.form`
max-width: 34rem;
margin: 3.4rem auto  ;

>div:nth-child(4){
  margin-top: 2.4rem;
}
`;

export const Avatar = styled.div`

position: relative;
width: 18.6rem;
height: 18.6rem;
margin: -8.4rem auto 3.2rem;



> img {
  width: 18.6rem;
  height: 18.6rem;
  
  border-radius: 50%;
}

> label {
width: 4.8rem;
height: 4.8rem;

background-color: ${({theme}) => theme.COLORS.BGE};
color: ${({theme}) => theme.COLORS.BACKGROUND_600};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
bottom: .7rem;
right: .7rem;
cursor: pointer;


> input {
  display: none;
}


}


`;