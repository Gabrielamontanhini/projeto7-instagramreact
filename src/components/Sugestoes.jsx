import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const elementos=[
        {imagem:"assets/img/bad.vibes.memes.svg", usuario:"bad.vibes.memes"},
        {imagem:"assets/img/chibirdart.svg", usuario:"chibirdart"},
        {imagem:"assets/img/razoesparaacreditar.svg", usuario:"razoesparaacreditar"},
        {imagem:"assets/img/adorable_animals.svg", usuario:"adorable_animals"},
        {imagem:"assets/img/smallcutecats.svg", usuario:"smallcutecats"}
]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

        {elementos.map(elemento => < Sugestao imagem={elemento.imagem} usuario={elemento.usuario}/>)} 
        </div>
    )
}