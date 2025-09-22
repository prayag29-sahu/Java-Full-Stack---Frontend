

let ul = document.querySelector("ul")
fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
    // console.log(data);
    return data.json()

}).then((res) => {
    // console.log(res);
    show(res)

})

function show(res) {
    for (let i of res) {
        let li = document.createElement("li")
        let h3 = document.createElement("h3")

        li.innerText = i.id
        h3.innerText = i.title
        ul.append(li)
        ul.append(h3)

    }
}