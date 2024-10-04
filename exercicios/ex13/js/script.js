function exibirTemperatura() {
    let temp = parseFloat(document.querySelector("#temperatura").value);
    let converter = parseInt(document.querySelector(".operador").value);

    switch (converter) {
        case 1:
            document.querySelector("#result").innerHTML = "A temperatura em Fahrenheit é: " + (temp * 9 / 5) + 32;
            break;
        case 2:
            document.querySelector("#result").innerHTML = "A temperatura em Celsius é: " + ((temp - 32) * 5 / 9) ;
            break;
        default:
            document.querySelector("#result").innerHTML = "A temperatura não pode ser identificada";
            break;
    }

}

document.querySelector('button').addEventListener('click', exibirTemperatura);