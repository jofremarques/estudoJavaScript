//* Qual a diferença entre Functions e Arrow Functions? *//

## O que são Arrow Functions? ##
R: São funções anonimas pq são utilizadas na maioria das vezes como funções de call back e tratam o this de maneira diferença

1- Precisam ser atribuidas a variaveis.
2- o Retorno é implicito, pois tudo depois da "seta" é assumido como retorno, e tbm n é nescessario o uso das " {} "

## Sintaxe 
Ex.
1-
    const soma = (a,b) => a + b ;


## Contexto
Arrow functions possuem this léxico(palavras existentes numa determinada língua)

Enquanto functions normais possui this dinâmico (modifica continuamente, que evolui; que pressupõe movimento). 

Isso significa que arrow functions herdam o contexto local de onde foi declarado, enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado no momento da chamada (se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente como o contexto global, que no caso dos navegadores é window).

## Constructor
Arrow functions não podem ser constructors, então não é possível usar o operador new com a mesma.

## Arguments
Arrow functions não possui o objeto array-like arguments.

## Nome de função
Expressões de função podem ser nomeadas explicatamente, isso é útil em alguns cenários que envolvem recursão e para em casos de exceção fica mais fácil de rastrear o código. 

Só que Arrows Functions não podem ser nomeadas explicitamente, elas acabam herdando o nome da variável onde foi criada.

## Retorno
Expressões de função precisam declarar explicitamente qual será o retorno da função.

Enquanto Arrow Functions permitem escrever em um modelo encurtado onde a última expressão analisada será o retorno da função quando é omitido as chaves {}.