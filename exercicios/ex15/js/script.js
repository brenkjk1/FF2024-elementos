// // Feito por mim mesmo.
// function verificarLogin() {
//     let name = document.querySelector("#nome").value;
//     let password = document.querySelector("#senha").value;

//     do {
//         if (name === password) {
//             alert("A senha não deve ser igual ao login");
//             name = prompt("Digite o nome de login");
//         }
//     } while (name === password);

//     alert("Conta criada com sucesso");
// }

// document.querySelector('button').addEventListener('click', verificarLogin);


// Correção do professor
function verificarLogin() {
    let login = document.querySelector("#nome").value;
    let password = document.querySelector("#senha").value;

    if (login === password) {
        alert("A senha não deve ser igual ao login");
        document.querySelector("#nome").value = "";
        document.querySelector("#senha").value = "";
    }
    else{
        alert("Logado com sucesso")
    }

}

document.querySelector('button').addEventListener('click', verificarLogin);