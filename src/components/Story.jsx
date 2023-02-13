export default function Story(props){
    
    
    return (
        <li class="story">
                <div class="imagem">
                    <img src={props.imagem} alt={props.usuario} />
                </div>
                <div class="usuario">
                    {props.usuario}
                </div>
            </li> 
    )
}