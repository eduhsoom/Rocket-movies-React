import { Container, Profile  } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";



export function Header() {
  return (
<Container>
<h1>RocketMovies</h1>
 

<Input placeholder="Pesquisar pelo título"/>

<Profile to='/profile'>
<div>
  

    <Link to="/profile">
    Eduh Soom
    </Link>
 
  <span><a href="#">Sair</a></span>

</div>

 <img src="https://github.com/eduhsoom.png" alt="Foto do usuario" />


 


</Profile>

</Container>

  )
}