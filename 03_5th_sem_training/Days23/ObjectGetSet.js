const User = {
    _email: 'P@Ps.com',
    _password: "abc",


    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const Me = Object.create(User)
console.log(Me.email);