const nome = &quot;Fernanda&quot;
let idade = 27;

let categoria;

if (idade &lt; 12){
categoria = &quot;criança&quot;;
}
if (idade &gt;= 12 &amp;&amp; idade &lt;= 18) {
categoria = &quot;adolescente&quot;;
}
else if (idade &gt; 18 &amp;&amp; idade &lt; 60){
categoria = &quot;adulta&quot;;
}
else if (idade &gt;= 60) {
categoria = &quot;idosa&quot;;
}

console.log(&quot;Categoria:&quot;, categoria);
console.log(&quot;Idade Final:&quot;, idade);
Codigo 2
let idade = prompt(&quot;Digite sua idade: &quot;);

if (idade &gt;= 18){
console.log(&quot;voto obrigatório&quot;);
}
else if (idade &lt; 16){
console.log(&quot;Não vota&quot;);
}
else if (idade &gt;= 16 &amp;&amp; idade &lt; 18){

console.log(&quot;Voto facultativo&quot;);
}
else if (idade &gt;= 70){
console.log(&quot;Voto facultativo&quot;);
}

Codigo 3
let numero = prompt(&quot;Digite um numero: &quot;);

if (numero &gt; 0){
console.log(&quot;Numero positivo&quot;);
}
else if (numero &lt; 0){
console.log(&quot;Numero negativo&quot;);
}
Código 4
let combustivel = prompt(&quot;qual tipo de combustivel voce deseja: &quot;);

if (combustivel == &quot;Gasolina&quot;){
console.log(&quot;Voce escolheu gasolina&quot;);
}
else if (combustivel == &quot;Alcool&quot;){
console.log(&quot;Voce escolheu alcool&quot;);
}
else {
console.log(&quot;Nao temos disponível&quot;);
}

Código 5
let velocidade = prompt(&quot;Em qual velocidade o carro passou: &quot;);

if (velocidade &lt;= 60){
console.log(&quot;Está dentro do limite&quot;);
}
else if (velocidade &gt;= 61 &amp;&amp; velocidade &lt;= 80){
console.log(&quot;Atenção, diminua a velocidade&quot;);
}
else {
console.log(&quot;Você foi multado&quot;);
