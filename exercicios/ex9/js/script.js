function Verificando() {
    let height = parseFloat(document.querySelector("#altura").value);
    let year = parseInt(document.querySelector("#idade").value);
    let resultado = "";


    if (height >= 1.70)
        resultado = "Pode entrar";
    else if ((year >= 18) && (height >= 1.60))
        resultado = "Pode entrar";
    else
        resultado = "Não pode entrar"

    document.querySelector("#resultado").innerHTML = resultado;
}

document.querySelector('button').addEventListener('click', Verificando);