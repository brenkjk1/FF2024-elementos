function Mensagem () {
    let campo = document.querySelector('#msg')
    let msgDigitada = campo.value;
    alert('A mensagem digitada é: "' + msgDigitada + '"');
}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', Mensagem);