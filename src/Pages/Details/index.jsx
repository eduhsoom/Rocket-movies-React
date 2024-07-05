import { Container , Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/button"
import { Section } from "../../components/Section"

import { Input } from "../../components/Input"

import { ButtonText } from "../../components/buttonText"
import { TextArea } from "../../components/TextArea"

import { NoteItem } from "../../components/NoteItem"

export function Details(){
return(
  <Container>
    <Header/>

<main>
  <Content>

<ButtonText to="/" title="Voltar"/>

<h1>Novo filme</h1>

<div className="Input">
  <Input placeholder="Título"/>
  <Input placeholder="Sua nota (de 0 a 5)"/>
</div>

<TextArea placeholder="Observações"/>




<Section title="Marcadores">
<div className="tags">
<NoteItem value="React"/>
<NoteItem isNew placeholder="Novo marcador"/>

</div>


</Section>
    
    <div className="Button">
    <Button title="Excluir filme"/>
    <Button title="Salvar alterações"/>

    </div>
    
    </Content>
</main>

         
  </Container>
)
}