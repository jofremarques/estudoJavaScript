/**
 * @variaveis
 */

/**
 * - O valor será imutável. 
 * - Existe dentro do escopo.
 */
const varConstante = 'teste';

function functionVarConstante() {
    const varConstante = 'Dentro da funcao';

    return varConstante;
}

console.log(varConstante)


/**
 * - Valor mutável.
 * - Ele só existe dentro do escopo. 
 */

let varLet = 'Inicial';

function functionVarLet() {
    console.log(varLet)
}
functionVarLet()

/**
 * @functions
 */

/**
 * - Ele tem um escopo que referencia a si mesmo. 
 * - Ela tem uma nome.
 */

function modelFunction() {
    console.log("Isso é uma função")
}

modelFunction();

/**
 * @FunctionConstruct
 * - Tem funções ou propriedades dentro dela.
 * - Precisa ser instanciada para ser executada.
 */

function FunctionConstruct() {
    this.propriedade = 'Propriedade de função construtora';

    this.acao1 = () => { // O método só existe dentro de um escopo.

    }

    this.acao2 = () => {

    }
}


const functionConstruct = new FunctionConstruct()

console.log(functionConstruct.propriedade)

/**
 * -@ArrowFunction
 * - Ela não precisa de um nome na hora de criar.
 * - Ela é anonima
 * - O retorno dela é implicito. 
 * - Herdam o contexto da onde foram declarados.
 */

const arrowFunction = () => {
    console.log("Isso é uma arrowFunction")
}

arrowFunction();

const arrowFunctionImp = () => console.log(1 + 2);

arrowFunctionImp();


function arrowFunctionHeranca(){

    const arrowFunction = ()=>{
        this.seila = 'dsds'
    }

    console.log(this.seila)
}


function arrowFunctionHeranca(){

    const arrowFunction = ()=>{
        const arrowFunction2 = ()=>{
            const arrowFunction3 = () =>{
                this.seila = 'dsds'
            }
        }
    }

    console.log(this.seila)
}


