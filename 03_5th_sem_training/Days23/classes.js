// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}

const Ram = new User("Ram", "Ram@gmail.com", "123")

console.log(Ram.encryptPassword());
console.log(Ram.changeUsername());
