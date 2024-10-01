// function lerNotas() {
//     let n1 = document.querySelector("#n1");
//     let nota1 = n1.value;
//     let n2 = document.querySelector("#n2");
//     let nota2 = n2.value;
//     let media = (nota1 + nota2) / 2;
//     let resultado = "";
//     if (media >= 7)
//         resultado = "Aprovado";
//     else if (media >= 5 && media < 7)
//         resultado = "Recuperação";
//     else
//         resultado = "Reprovado";
//     let paragrafo = document.querySelector("#result");
//     paragrafo.innerHTML = "O resultado é:" + media + resultado;
// }

// let botao = document.querySelector('button');
// botao.addEventListener('click', lerNotas);

// PROFESSOR

function lerExibirResultado() {
    let nota1 = parseFloat(document.querySelector(".num1").value);
    let nota2 = parseFloat(document.querySelector(".num2").value);
    let media = (nota1 + nota2) / 2;
    let resultado = "";
    if (media < 5) {
        resultado = "Reprovado";
    }

    else if (media < 7) {
        resultado = "Recuperação";
    }

    else {
        resultado = "Aprovado";
    }

    let paragrafo = document.querySelector("#resultado");
    paragrafo.innerHTML = `O aluno de média ${media.toFixed(2)} está ${resultado}`;
}

let botao = document.querySelector('button');
botao.addEventListener("click", lerExibirResultado);