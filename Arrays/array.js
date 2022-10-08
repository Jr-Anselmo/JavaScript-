// Criando um Array - Acessar um item(index) do Array

//var frutas = [`Maçã`, `Banana`];
//var primeiro = frutas[0];
//var ultimo = frutas[frutas.length - 1];
//console.log(frutas.length);
//console.log(ultimo);
//console.log(primeiro);

// Iterar um Array

//var frutas = [`Maçã`, `Banana`];
//frutas.forEach(function (item, indice, array) { console.log(item, indice)});

// Adicionar ou Remover um item ao final do Array

//var frutas = [`Maçã`, `Banana`];
//var Adicionar = frutas.push(`Laranja`);
//var ultimo = frutas.pop()
//var primeiro = frutas.shift()
//console.log(frutas);

// Adicionar ao início do Array

//var frutas = [`Maçã`, `Banana`];
//var Adicionar = frutas.push(`Laranja`);
//var ultimo = frutas.pop()
//var primeiro = frutas.shift()
//var adicionar = frutas.unshift(`Morango`)
//var adicionar = frutas.push(`Manga`);
//console.log(frutas);

// Procurar o índice de um item na Array

//var frutas = [`Morango`, `Banana`, `Manga`];
//var pos = frutas.indexOf(`Banana`);

//console.log(pos);

// Remover itens de uma posição de índice

//var frutas = [`Morango`, `Banana`, `Manga`];
//var pos = frutas.indexOf(`Banana`);
//var removeItem = frutas.splice(pos, 1);
//console.log(frutas);

//var vegetais = [`Repolho`, `Nabo`, `Rabanete`, `Cenoura`];
//console.log(vegetais);
//
//var pos = 1, n = 2;
//var itensRemovidos = vegetais.splice(pos, n);
//console.log(vegetais);
//
//// Copiar um Array
//
//var copiar = vegetais.slice();

// Acessando elementos de um array

//var arr = [`este é o primeiro elemento`, `este é o segundo elemento`];
//console.log(arr[0]);
//console.log(arr[1]);
//console.log(arr[arr.length - 1]);
//
//var anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
//console.log(anos[3]);

//var promessa = {
//    'var': `texto`,
//    'array': [1, 2, 3, 4]
//};
//console.log(promessa[`var`]);

// Relação entre Length e propriedades numéricas

var frutas = [];
frutas.push(`banana`, `maça`, `pêssego`);
console.log(frutas.length);

frutas[5] = `manga`;
frutas.length = 10;
console.log(frutas[5]);
console.log(Object.keys(frutas));
console.log(frutas.length);
