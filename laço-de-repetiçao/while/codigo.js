let tentativas = 0
const usuario = prompt("Crie o usuario: ")
const senha = prompt("Crie a senha: ")

let confirmarUsuario = prompt("\nConfirme seu usu�rio: ")
let confirmeSenha = prompt("Confirme sua senha: ")

//pedido de usuario e senha validas
while (confirmarUsuario !== usuario || confirmeSenha !== senha ){
    console.log("Usu�rio ou senha incorretos.")
    let confirmarUsuario = prompt("Confirme seu usu�rio: ")
    let confrmeSenha = prompt("Confirme sua senha: ")
}
console.log("Para Efetuar seu login, confime sua senha")

// confirme sua senha
confirmeSenha = prompt("\nConfirme sua senha: ")
while((confirmeSenha !== senha)  && tentativas < 4){
    console.log("Senha incorreta, insira novamente.")
    confirmeSenha = prompt("Confirme sua senha: ")
    tentativas ++
    console.log("Acesso Bloqueado")

    let recuprarSenha = prompt("\nEsqueceu a senha? (Sim/N�o): ").toLowerCase()
    if (recuperarSenha = "sim"){
        console.log("Sua senha � ",senha)
        confirmeSenha = prompt("Confirme sua senha: ")
    }
    
    else if (recuperarSenha == "nao" || recuperarSenha == "n�o"){
        confirmeSenha = prompt("Confirme sua senha: ")
    }
}

console.log("Login Efetuado!")

let sair = prompt("Deseja sair do seu login? (se sim, digite 'sair'): ")
if (sair = "sair"){
  console.log("Vo�� saiu da sua conta.")
}
