import { Container } from "./styles";


import { Tag } from "../Tag";



export function Note({data, isActive=true , ...rest}) {
return(
<Container {...rest}>

<h1>
{data.title}
</h1>



<p>
  {data.text}      
</p>

{
        data.tags && 
        <footer>
                {
data.tags.map( tag => <Tag key={tag.id} title={tag.name}></Tag>)
}
</footer>
}




</Container>


)



}