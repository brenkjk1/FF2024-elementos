function exibirCalculadora() {
    let numero = parseInt(document.querySelector("#numero").value);

    let resultado = "";
    for (let index = 1; index <= 10; index++) {
        resultado += `${numero} X ${index} = ${numero * index} <br>`;
    }
    document.querySelector('h2').innerHTML = resultado;
}


document.querySelector('button').addEventListener('click', exibirCalculadora);