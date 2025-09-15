// Example usage of Promise.all:
function fetchUser1() {
    return fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());
}

function fetchUser2() {
    return fetch('https://jsonplaceholder.typicode.com/users/2').then(res => res.json());
}

Promise.all([fetchUser1(), fetchUser2()])
    .then(([user1, user2]) => {
        console.log('User 1:', user1);
        console.log('User 2:', user2);
    })
    .catch((error) => console.log(error));
