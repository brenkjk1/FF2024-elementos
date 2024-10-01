function somar() {
    let num1 = document.querySelector('#numero').value;
    let num2 = document.querySelector('#numero2').value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let soma = num1 + num2;

    pResult = document.querySelector('#result')
    pResult.innerHTML = `${num1} + ${num2} = ${soma}`;
    // let valorDigitado = campo.value;
    // alert('A soma desses valores é:')
}

let botao = document.querySelector("button");
botao.addEventListener('click', somar);