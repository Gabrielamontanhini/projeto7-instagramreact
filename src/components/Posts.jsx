import Post from "./Post"

export default function Posts() {
    const elementos = [
        {
            imagem: "assets/img/meowed.svg"
            , nome: "meowed",
            conteudo: "assets/img/gato-telefone.svg",
            alt: "gato-telefone",
            primeiroCurtir: "respondeai",
            numeroCurtidas: "3"
        },
        {
            imagem: "assets/img/barked.svg",
            nome: "barked",
            conteudo: "assets/img/dog.svg",
            alt: "dog",
            primeiroCurtir: "adorable_animals",
            numeroCurtidas: "4"
        },
        {
            imagem: "assets/img/floppa.png",
            nome: "floppa",
            conteudo: "assets/img/postfloppa.jpeg",
            alt: "floppa",
            primeiroCurtir: "meowed",
            numeroCurtidas: "8"
        }
    ]
    return (
        <div class="posts">

            {elementos.map(elemento => <Post imagem={elemento.imagem} nome={elemento.nome} conteudo={elemento.conteudo} alt={elemento.alt} curtidas={elemento.primeiroCurtir} numero={elemento.numeroCurtidas} />)}


        </div>
    )
}