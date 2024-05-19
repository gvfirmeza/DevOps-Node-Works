class Enemy {
    constructor(vida=0, dano=0) {
        this.vida = vida;
        this.dano = dano;
    }

    getVida() {
        return this.vida;
    }

    getDano() {
        return this.dano;
    }

    hitted(x) {
        this.vida -= x;
        return this.vida;
    }
}

module.exports = Enemy;