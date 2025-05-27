 function fazerLogin() {
    let usuarios = [
        { nome: "admin", senha: "senha1" },
        { nome: "joao", senha: "senha2" },
        { nome: "maria", senha: "senha2" },
        { nome: "pedro", senha: "senha3" },
        { nome: "ana", senha: "senha4" },
        { nome: "lucas", senha: "senha5" },
        { nome: "carla", senha: "senha6" },
        { nome: "rafael", senha: "senha7" },
        { nome: "juliana", senha: "senha8" },
        { nome: "fernando", senha: "senha9" }
    ]

    let usuarioDigitado = prompt("Digite o nome de usuário:")
    let senhaDigitada = prompt("Digite a senha:")

    let loginCorreto = false

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarioDigitado === usuarios[i].nome && senhaDigitada === usuarios[i].senha) {
            loginCorreto = true
            break
        }
    }

    if (loginCorreto) {
        console.log("Login efetuado com sucesso!")
    } else {
        console.log("Erro: usuário ou senha incorretos.")
    }
}

fazerLogin()
