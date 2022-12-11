const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recongnition = new SpeechRecognition();
recongnition.lang = 'pt-Br'
recongnition.start();

recongnition.addEventListener('result', onSpeak);

function onSpeak(event) {

    chute = event.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);

}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recongnition.addEventListener('end', () => recongnition.start());