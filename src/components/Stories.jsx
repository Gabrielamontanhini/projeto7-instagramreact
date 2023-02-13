import Story from "./Story"

export default function Stories() {
    const elementos = [
        {imagem:"assets/img/9gag.svg", usuario:"9gag"},
        {imagem:"assets/img/meowed.svg", usuario:"meowed"},
        {imagem:"assets/img/barked.svg", usuario:"barked"},
        {imagem:"assets/img/nathanwpylestrangeplanet.svg", usuario:"nathanwpylestrangeplanet"},
        {imagem:"assets/img/wawawicomics.svg" , usuario:"wawawicomics"},
        {imagem:"assets/img/respondeai.svg" , usuario:"respondeai"},
        {imagem:"assets/img/filomoderna.svg" , usuario:"filomoderna"},
        {imagem:"assets/img/memeriagourmet.svg", usuario:"filomoderna"}
    ]

    return (
        <ul class="stories">
            {elementos.map(elemento => < Story imagem={elemento.imagem} usuario={elemento.usuario}/>)}
            <li class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </li>
        </ul>
    )
}