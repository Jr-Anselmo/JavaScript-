const cliente = {
    nome: "Lay",
    idade: 36,
    cpf: "12345678999",
    email:"leo@gmail.com"
}

const chaves = [ "nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]])
chaves.forEach(info=>console.log(cliente[info]))

console.log(cliente["nome"])