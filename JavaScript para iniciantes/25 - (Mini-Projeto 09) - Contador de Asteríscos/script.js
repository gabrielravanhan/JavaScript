exibirAsteriscos(10);
function exibirAsteriscos(linhas) {
    let asterisco = '';
    for (let i = 1; i <= linhas; i++) {
        for (let j = i; j <= i; j++) {
            asterisco += '*';
        }
        console.log(asterisco);
    }
}