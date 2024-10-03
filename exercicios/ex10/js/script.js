function exibirMaisBarato() {
    let name1 = document.querySelector('#nome1').value
    let name2 = document.querySelector('#nome2').value
    let name3 = document.querySelector('#nome3').value
    let price1 = parseFloat(document.querySelector('#produto1').value);
    let price2 = parseFloat(document.querySelector('#produto2').value);
    let price3 = parseFloat(document.querySelector('#produto3').value);
    let resultado = "";

    // let maior = Math.max(name1, name2, name3, price1, price2, price3);
    // let menor = Math.min(price1, price2, price3);
    // resultado = `${menor} é menor!`;

    if ((price1 <= price2) && (price1 <= price3))
        resultado = ` ${name1}, custa R$ ${price1} é o menor valor!`
    else if ((price2 <= price1) && (price2 <= price3))
        resultado = `  ${name2}, custa R$ ${price2} é o menor valor!`
    else
        resultado = `${name3}, custa R$ ${price3} é o menor valor!`
    document.querySelector("#result").innerHTML = resultado;

}

document.querySelector('button').addEventListener('click', exibirMaisBarato);
