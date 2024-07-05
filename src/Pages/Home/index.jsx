import { Container, Content , Button } from "./styles";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

import { FiPlus } from "react-icons/fi";


export function Home(){
return(
<Container>
<Header/>


<div className="title">
<h1>Meus filmes</h1>
<Button to="/Details">
  <FiPlus/>
  Adicionar  filme
</Button>
</div>

<main>
  <Content>
  
  
  <Note to="/Preview" data = {{ title : 'Interestellar',
   text:`Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper
   , ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
 `
 ,
   tags: [
    {id: '1' , name: 'Ficção Científica'},
    {id: '2' , name: 'Drama'},
    {id: '3' , name: 'Familia'}
  ]
  }}/>
  

  
  <Note data = {{ title : 'Interestellar',
   text:`Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper
   , ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
   `
 ,
   tags: [
    {id: '1' , name: 'Ficção Científica'},
    {id: '2' , name: 'Drama'},
    {id: '3' , name: 'Familia'}
  ]
  }}/>
  
 
  <Note data = {{ title : 'Interestellar',
   text:`Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper
   , ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
    `
 ,
   tags: [
    {id: '1' , name: 'Ficção Científica'},
    {id: '2' , name: 'Drama'},
    {id: '3' , name: 'Familia'}
  ]
  }}/>
  

  




  



  </Content>
</main>



</Container>
)


}