const cliente = {
    nome: "Lay",
    cpf: "25836914785",
    email: "lay@gmail.com",
    fones: [ "5583698523698", "5583369851425"],
    dependentes: [
        {
            nome: "Sara Maria",
            parentesco: "filha",
            dataNasc: "20/03/2010"},
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/02/2015"
        }
    ],
    saldo: 100,
    depositar: function(valor)
    {
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
