function exibirCumprimento() {
    let turno = document.querySelector('#turno').value;
    switch (turno) {
        case "M":
            document.querySelector('h2').innerHTML = "Bom dia!";
            break;
        case "V":
            document.querySelector('h2').innerHTML = "Boa Tarde!";
            break;
        case "N":
            document.querySelector('h2').innerHTML = "Boa Noite!";
            break;
        default:
            document.querySelector('h2').innerHTML = "Opção Inválida!";
            break;
    }
}

document.querySelector('button')
    .addEventListener('click', exibirCumprimento);