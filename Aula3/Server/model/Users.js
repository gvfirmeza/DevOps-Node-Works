
class User {

    constructor(id, name, email, password, status, uuid, dataCreated) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.status = status;
        this.uuid = uuid;
        this.dataCreated = dataCreated;
    }

    toString() {
        return `User: ${this.id} - ${this.name} - ${this.email}`;
    }

}

// let user = new User(1, 'John Doe', '123456', 'JD@gmail.com');

// console.log(user.toString());

module.exports = User;