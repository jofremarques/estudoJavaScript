# JavaScript 

## Conceitos:

[instanciar]-> instanciar é o ato de transformar uma variavel para aquele tipo. A estrutura é transformada e a variavel acaba recebendo todas as propriedades do elemento que foi instanciado. 

**EX:**
var mercado = new Mercado()//instanciado (quando tipamos a variavel e estamos instanciando// TIPAMOS) 
var mercado = Mercado() // atribuindo (quando atribuimos valores, mas n é do tipo mercado // ATRIBUIMOS)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

[objeto]-> uma classe é um tipo de objeto, pq dentro dessa classe vc consegue setar (pegar o valor de algum objeto e seta ele na classe)

**EX:**
var pessoa = {
    nome : 'caboquito', //atributo nome que recebe o valor caboquito
    idade : 24 
}
var nome = pessoa.nome;(atribui o valor nome que esta contido no objeto pessoa, na variavel nome)
pessoa.idade = pessoa.idade + 5; (adicionar +5 no valor do atribudo idade)

//////////////////////////////////////////////////////////////////////////////////////////////////////////
array -> compartições que guardam valores.
objeto -> propiedade/atributos que guardam valores.

var time = ["numero 11"," numero 10",...]

var salada = {
    frutas : ['maça','uva']
}
var colher = salada.frutas[1](teria na minha colher uma uva.)

salada.frutas[2] = 'maça' (atribui o terceiro indice com o valor maça , agora tenho os valores "maça,uva,maça" atribuidos ao atributo fruta do objeto salada)
//////////////////////////////////////////////////////////////////////////////////////////////////////////

**DESAFIO01**

tipe uma variavel do tipo sacola, set nela um atributo chamado compras e coloque um array de 3 itens qualquer.Depois utilize o metodo chamado mostrarItensSacola.

sacola compras

var sacolaDeCompras = new Sacola() // tipou sacolaDeCompras com o tipo Sacola.

 sacolaDeCompras.compras = ['frango','batata','arroz'];// setou valores ao atributo compras.

 sacolaDeCompras.mostrarItensSacola()//utlizando o metodo mostrarItensSacola.

**set um metodo chamado fecharSacola e adicione o parametro compras nele**

sacolaDeCompras.fechaSacola(sacolaDeCompras.compras)// no objeto sacolaDeCompras, foi setado o metodo fecharSacola e adicionado ao parametro o valor do atributo compras.
