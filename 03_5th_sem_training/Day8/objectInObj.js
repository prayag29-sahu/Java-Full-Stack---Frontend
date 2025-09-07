const user = {
    username: "Prayag",
    age:19,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
user.username = "someone"
user.welcomeMessage()

// console.log(this);
