import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Container , Form, Background } from "./style";
import { Button } from "../../components/button";

import { Link } from "react-router-dom";

export function SignIn(){
return(
<Container>

<Form>
<h1>RocketMovies</h1>
<span>Aplicação para acompanhar tudo que assistir.</span>


<p>Faça seu login</p>

<Input icon={FiMail} placeholder="E-mail" type="email"/>
<Input icon={FiLock} placeholder="Senha" type="password"/>

<Button title="Entrar"/>

<Link to="/signup" >Criar conta</Link>
</Form>

<Background/>

</Container>

)

}