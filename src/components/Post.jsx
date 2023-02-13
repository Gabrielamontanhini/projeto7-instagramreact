import { useState } from "react";

export default function Post(props) {
    const [classe, setClasse] = useState("")
    const [curtido, setCurtido] = useState("heart-outline");
    const [likes, setLikes] = useState(props.numero);
    const [salvo, setSalvo] = useState("bookmark-outline")

    function colocarCurtida() {
        if (curtido === "heart-outline") {
            setCurtido("heart");
            setClasse("curtido")
            setLikes(Number(likes)+1)
            console.log("fica vermelho hein")
        }
        //transformar o coração em filled vermelho e adicionar 1 ao numero de curtidas
    }
    function testeAlerta() {
        alert("este clique funcionou")
    }

    function manejarCurtida() {
        if (curtido === "heart-outline") {
            setCurtido("heart");
            setClasse("curtido")
            setLikes(Number(likes)+1)
        } else {
            setCurtido("heart-outline")
            setClasse("")
            setLikes(Number(likes)-1)
        }
        //transformar o coração em filled vermelho SE não estiver assim e adicionar 1 ao numero de curtidas, caso nao, voltar ao normal e retirar 1 das curtidas
    }

    function salvarOuNao() {
        if (salvo === "bookmark-outline") {
            setSalvo("bookmark")
        } else {
            setSalvo("bookmark-outline")
        }
    }

    return (
        <div class="post" data-test="post" >
            <div class="topo">
                <div class="usuario" >
                    <img src={props.imagem} alt={props.nome} data-test="post-image" onClick={testeAlerta}/>
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo" onClick={colocarCurtida}>
                <img src={props.conteudo} alt={props.alt} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={curtido} onClick={manejarCurtida} class={classe} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline" ></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvo} onClick={salvarOuNao} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>{props.curtidas}</strong> e <strong data-test="likes-number" >outras {likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}