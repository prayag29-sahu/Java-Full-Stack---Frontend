function loginUserMessage(username = "someone") {
    if (!username) {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Prayag"))
console.log(loginUserMessage())

