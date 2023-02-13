import { useState } from "react"

export default function Usuario() {
    const [nomeUsuario, setNomeUsuario ]= useState("catatonics")
    const [fotoUsuario, setFotoUsuario ]= useState("assets/img/catanacomics.svg")





    function mudarNomeUsuario(){
    let novoNomeUsuario = prompt("Digite seu novo nome");
    if (novoNomeUsuario.trim() !== ""){
        setNomeUsuario(novoNomeUsuario)
    }
    }

    function mudarFotoUsuario(){
let novaFotoUsuario = prompt("Insira o URL da nova imagem");
if (novaFotoUsuario.trim() !== ""){
    setFotoUsuario(novaFotoUsuario);
}
    }


    return (
        <div class="usuario">
            <img src={fotoUsuario} alt="imagem de perfil" onClick={mudarFotoUsuario} data-test="profile-image"/>
            <div class="texto">
                <span>
                    <strong data-test="name">{nomeUsuario}</strong>
                    <ion-icon name="pencil" onClick={mudarNomeUsuario} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}

