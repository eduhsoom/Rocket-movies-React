import { Container , Form , Avatar } from "./style";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/button"

import { ButtonText } from "../../components/buttonText"


export function Profile() {
return(
  <Container>
<header>
 <a href="/">
 <ButtonText to="/" title="Voltar"/>
 </a>
</header>



<Form> 

<Avatar>
<img src="https://github.com/eduhsoom.png" alt="Foto do usuario" />
<label htmlFor="avatar">
  <FiCamera/>
<input type="file" id="avatar" />

</label>
</Avatar>

<Input placeholder="Nome" type="text" icon={FiUser}/>
<Input placeholder="Email" type="email" icon={FiMail}/>
<Input placeholder="Senha" type="Password" icon={FiLock}/>
<Input placeholder="Nova senha" type="Password" icon={FiLock}/>

<Button title="Salvar"/>

</Form>


  </Container>
)




}