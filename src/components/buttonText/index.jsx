import { Container } from "./styles";

import { IoIosArrowRoundBack } from "react-icons/io";


export function ButtonText({title, ...rest}){

  return(
    <Container 
    type="button"
    {...rest}>
      <IoIosArrowRoundBack />
      {title}
    </Container>
  )




}