export default function Sugestao(props) {

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} alt={props.usuario}/>
                <div class="texto">
                    <div class="nome">{props.usuario}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}