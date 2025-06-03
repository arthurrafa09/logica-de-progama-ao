// Pergunta
console.log("Escolha seu sistema operacional")
console.log("1. Terminal linux")
console.log("2. CMD")
let Pergunta = prompt("Qual você deseja utilizar: ")

switch (Pergunta) {
    case "1":
        console.log("Operação realizada")
        console.log("Você escolheu o Terminal linux")
        console.log("Esses são os comandos básicos para o terminal linux: ls - lista os arquivos e pastas do diretório atual. cd+nome da pasta - entrar em uma pasta. cd .. - voltar uma pasta. cd~ vai direto para o diretório pessoal. mkdir - criar pasta. cp - copia arquivo. mv - mover arquivo. rm - apagar arquivo. rm -r - apagar tudo")
        break
}

if (Pergunta == "2" || Pergunta == "CMD") {
    console.log("Operação realizada")
    console.log("Você escolheu o CMD")
    console.log("cd - mostra o diretório. cd.. - volta uma pasta. dir - lista os arquivos. cls - limpa todo o cmd. mkdir - criar nova pasta")
} else {
    console.log("Operação inválida")
}
