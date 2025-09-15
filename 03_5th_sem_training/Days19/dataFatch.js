function fetchGitHubUser() {
    return fetch('https://api.github.com/users/hiteshchoudhary')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}

fetchGitHubUser();
