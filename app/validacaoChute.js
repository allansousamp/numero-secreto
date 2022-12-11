function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (numeroForMaiorOuMenorQueOvalorPermitido(numero)) {
        elementoChute.innerHTML +=  `
            <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h1>Você acertou!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOvalorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})