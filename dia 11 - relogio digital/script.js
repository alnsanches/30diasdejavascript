function time() {
    var display = document.querySelector('.display');
    var clock = new Date();
    var hour = corrigirHorario(clock.getHours()) + ':' + corrigirHorario(clock.getMinutes()) + ':' + corrigirHorario(clock.getSeconds());
    display.textContent = hour;
}

function corrigirHorario(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
}

setInterval(time, 1000);
