// Pergunta
console.log("Escolha seu sistema operacional")
console.log("1. Terminal linux")
console.log("2. CMD")
let Pergunta = prompt("Qual voc� deseja utilizar: ")

switch (Pergunta) {
    case "1":
        console.log("Opera��o realizada")
        console.log("Voc� escolheu o Terminal linux")
        console.log("Esses s�o os comandos b�sicos para o terminal linux: ls - lista os arquivos e pastas do diret�rio atual. cd+nome da pasta - entrar em uma pasta. cd .. - voltar uma pasta. cd~ vai direto para o diret�rio pessoal. mkdir - criar pasta. cp - copia arquivo. mv - mover arquivo. rm - apagar arquivo. rm -r - apagar tudo")
        break
}

if (Pergunta == "2" || Pergunta == "CMD") {
    console.log("Opera��o realizada")
    console.log("Voc� escolheu o CMD")
    console.log("cd - mostra o diret�rio. cd.. - volta uma pasta. dir - lista os arquivos. cls - limpa todo o cmd. mkdir - criar nova pasta")
} else {
    console.log("Opera��o inv�lida")
}
