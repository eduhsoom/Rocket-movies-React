import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Container , Form, Background } from "./style";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";


export function SignUp(){
return(
<Container>

<Form>
<h1>RocketMovies</h1>
<span>Aplicação para acompanhar tudo que assistir.</span>


<p>Crie sua conta</p>
<Input icon={FiUser} placeholder="Nome" type="text"/>

<Input icon={FiMail} placeholder="E-mail" type="email"/>
<Input icon={FiLock} placeholder="Senha" type="password"/>

<Button title="Cadastrar"/>

<Link to="/" >Voltar para o login</Link>

</Form>

<Background/>

</Container>

)

}