class Calculadora {
    constructor(numero1=0, numero2=0) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    getSoma() {
        return this.numero1 + this.numero2;
    }

    getSubtracao() {
        return this.numero1 - this.numero2;
    }
}

module.exports = Calculadora;