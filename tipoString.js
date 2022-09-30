const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';

const senha1 = "senhaSuperSegura466";
const StringNumeros = "34567";
const citacao = 'O Leo disse "oi!"';
console.log(citacao)

// concatenação 

const pergunta = "Meu nome é ";
const meuNome = "Leo";
console.log(pergunta + meuNome);

// template string ou template literal

// exemplo de unicode

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// exemplo string minuscula 

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log (cidade === input); //false 

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo);// true

const senha = "minhaSenha123"
console.log(senha.length)