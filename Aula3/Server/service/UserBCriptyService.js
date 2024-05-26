const bcrypt = require("bcrypt")

class UsersBCriptyService {

    constructor(password) {
        this.password = password
        this.passwordCrypt = undefined
    }

    //...salvar
    gerarCriptografia() {
        const salt = 10;
        this.passwordCrypt = bcrypt.hashSync(this.password, salt);
        return this.passwordCrypt
    }

    //...login
    checkCritografia(passwordtest) {
        return bcrypt.compareSync(passwordtest, this.passwordCrypt);
    }
}

// let objeto = new UsersBCriptyService("123456")
// console.log( objeto.gerarCriptografia());
// console.log(objeto.checkCritografia("123456"));

module.exports = UsersBCriptyService;