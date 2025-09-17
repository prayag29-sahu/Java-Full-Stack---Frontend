
let ul = document.getElementById('ul');

fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        show(data);
    })
    .catch((error) => console.log(error));


// fetchGitHubUser();

function show() {
    for (let i in data.data) {
        let li = document.createElement('li');
        li.innerText = data.data[i].employee_name;
        ul.appendChild(li);
    }
}
