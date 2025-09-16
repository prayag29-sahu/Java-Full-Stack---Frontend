class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}Prayag`
    }

    set password(value) {
        this._password = value
    }
}

const prayag = new User("S@prayag.ai", "abc")
console.log(prayag.email);