const cliente = {
    nome: "Lay",
    idade: 36,
    cpf: "12345678999",
    email:"leo@gmail.com",
    fones:["55975362536", "55836982252"]
}
//cliente.fones.forEach(fones => console.log(fones))
cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2021"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)