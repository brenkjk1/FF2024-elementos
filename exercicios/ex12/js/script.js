function exibirResultado() {
    let n1 = parseFloat(document.querySelector('#num1').value);
    let n2 = parseFloat(document.querySelector('#num2').value);
    let calcular = document.querySelector('#calculadora').value;

    switch (calcular) {
        case '+':
            result = n1 + n2;
            document.querySelector("h2").innerHTML = "A soma é:" + result;
            break;
        case '-':
            result = n1 - n2;
            document.querySelector("h2").innerHTML = "A subtração é:" + result;
            break;
        case '*':
            result = n1 * n2;
            document.querySelector("h2").innerHTML = "A multiplicação é:" + result;
            break;
        case '/':
            result = n1 / n2;
            document.querySelector("h2").innerHTML = "A divisão é:" + result;
            break;
        case '**':
            result = n1 ** n2;
            document.querySelector("h2").innerHTML = "A Potenciação é:" + result;
            break;
        case '**2':
            result = n1 ** (1 / n2)
            document.querySelector("h2").innerHTML = "A Radiciação é:" + result;
            break;
    }
}

document.querySelector('button').addEventListener('click', exibirResultado);