function gerarTabela() {
    let preco = document.querySelector('#preco').value;
    preco = preco.replace(',', '.');
    if (isNaN(preco) || preco == '') {
        alert("Valor inválido!");
    }
    else {
        preco = parseFloat(preco);
        let htmlPreco = "";
        for (let i = 1; i <= 50; i++) {
            if (i == 1) {
                htmlPreco += `
                <tr><td>1 pão</td>
                    <td>R$ ${preco.toFixed(2)}</td>
                </tr>`;
            } else {
                htmlPreco += `
                <tr><td>${i} pães</td>
                    <td>R$ ${(preco * i).toFixed(2)}</td>
                </tr>`;
            }
        }
        document.querySelector('.tabelaPreco').innerHTML = htmlPreco;
    }
}
    document.querySelector('button').addEventListener('click', gerarTabela);