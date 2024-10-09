// function exibirCalculadora() {
//     let numero = parseInt(document.querySelector("#numero").value);

//     let resultado = "";
//     for (let index = 1; index <= 10; index++) {
//         resultado += `${numero} X ${index} = ${numero * index} <br>`;
//     }
//     document.querySelector('h2').innerHTML = resultado;
//     document.querySelector('#numero').disabled = true;
//     document.querySelector('button').disabled = true;
//     document.querySelector('.btn-dark').disabled = false;
// }

// function liberarTabuada() {
//     let podeGerar = confirm("Deseja gerar outra tabuada?");

//     if (podeGerar == true) {
//         document.querySelector('#numero').disabled = false;
//         document.querySelector('button').disabled = false;
//         document.querySelector('#btn').disabled = true;
//     }
// }

// document.querySelector('button').addEventListener('click', exibirCalculadora);
// document.querySelector('.btn-dark').addEventListener('click', liberarTabuada);


function gerarTabuada() {
    let numero = document.querySelector('#numero').value;
    let msgTabuada = "";
    for (let i = 1; i <= 10; i++) {
        msgTabuada += `${numero} X ${i} = ${numero * i} <br>`;
    }
    document.querySelector('h5').innerHTML = msgTabuada;
    document.querySelector('#numero').disabled = true;
    document.querySelector('.btn-primary').disabled = true;
    document.querySelector('.btn-dark').disabled = false;
}
function liberarTabuada() {
    let podeGerar = confirm("Deseja gerar outra tabuada?");

    if (podeGerar == true) {
        document.querySelector('#numero').disabled = false;
        document.querySelector('.btn-primary').disabled = false;
        document.querySelector('.btn-dark').disabled = true;
    }
}
document
    .querySelector('.btn-primary')
    .addEventListener('click', gerarTabuada);

document
    .querySelector('.btn-dark')
    .addEventListener('click', liberarTabuada);