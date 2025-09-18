class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }
}

let me = new User("Me", "me@gmail.com","123")
console.log(me);
