// Corpo de uma classe e definições de métodos

//constructor(altura, largura) {
//    this.altura = altura; this.largura = largura;
//}
//class Retangulo {
//    get area() {
//        return this.calculaArea()
//    }
//    calculaArea() {
//        return this.altura * this.largura;
//    }
//}
//const quadrado = new Retangulo(10, 10);
//console.log(quadrado.area)

// Métodos estáticos

//class Ponto {
//    constructor(x, y) {
//        this.x = x;
//        this.y = y;
//    }
//    static distancia(a, b) {
//        const dx = a.x - b.x;
//        const dy = a.y - b.y;
//
//        return Math.hypot(dx, dy);
//    }
//}
//
//const p1 = new Ponto(5, 5);
//const p2 = new Ponto(10, 10);
//
//console.log(Ponto.distancia(p1, p2));
//
//function Animal (nome) {
//    this.nome = nome;
//}
//
//Animal.prototype.falar = function() {
//    console.log(this.nome + ` faça barulho. `);
//}
//
//class Cachorro extends Animal {
//    falar() {
//        console.log(this.nome + ` lati. `);
//    }
//}
//
//let cachorro = new Cachorro(`Mitzie`);
//cachorro.falar(); 
//
//class Gato {
//    constructor(nome) {
//        this.nome = nome;
//    }
//    falar() {
//        console.log(this.nome + ` faça barulho. `);
//    }
//}
//
//class Leao extends Gato {
//    falar() {
//        super.falar();
//        console.log(this.nome + ` roars. `);
//    }
//}
//
//let leao = new Leao(`Fuzzy`);
//leao.falar();

// Subclasses Abstratas ou mix-ins

class  Humano {
    constructor(nome) {
        this.nome = nome;
    }
    andar() {
        return this.nome+ ` andou um passo`
    }
}

const HumanoFalante = Base => class extends Base {
    falar() {
        return this.nome+ ` diz: olá mundo!`
    }
}

const HumanoFalanteMixado = Base => class extends Base {}
const HumanoFinal = HumanoFalanteMixado(HumanoFalante(Humano));
const humano = new HumanoFinal (`Bill Gates`);

console.log(humano.andar());
console.log(humano.falar());