function exibirSemana() {
    let dSemana = document.querySelector("#diaSemana").value;
    let resultado = "";
    if (dSemana == '1')
        resultado = "Domingo";
    else if (dSemana == '2')
        resultado = "Segunda-feira"
    else if (dSemana == '3')
        resultado = "Terça-feira"
    else if (dSemana == '4')
        resultado = "Quarta-feira"
    else if (dSemana == '5')
        resultado = "Quinta-feira"
    else if (dSemana == '6')
        resultado = "Sexta-feira"
    else if (dSemana == '7')
        resultado = "Sábado"
    else
        resultado = "Inválido"

    let h1 = document.querySelector("h1");
    h1.innerHTML = resultado;
}

let botao = document.querySelector('button')
botao.addEventListener('click', exibirSemana)