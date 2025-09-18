

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}


const Shyam = new User("Shyam", "Shyam@gmail.com", "123")

console.log(Shyam.encryptPassword());
console.log(Shyam.changeUsername());