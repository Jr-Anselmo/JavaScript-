const cliente = {
    nome: "Lay",
    idade: 36,
    cpf: "12345678999",
    email:"leo@gmail.com",
    fones:["55975362536", "55836982252"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2021"
    }]
}

cliente.dependentes.push({ 
    nome:"Samia Maria",
    parentesco: "filha", 
    dataNasc: "21/04/2021",
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependentes => dependente => dependente.dataNasc==="04/012014")

console.log(filhaMaisNova[0].nome)