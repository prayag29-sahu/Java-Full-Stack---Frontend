function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Ram", 12, true)
const userTwo = new User("Shyam", 11, false)
console.log(userOne.constructor);
console.log(userTwo);