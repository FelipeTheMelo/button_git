const form = document.getElementById('form');
const campoA = document.getElementById('saldo');
const campoB = document.getElementById('saque');
const valido = document.getElementById('valido');
const erro = document.getElementById('erro');

function validaValor(valorA, valorB) {
    return valorB > valorA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = validaValor(parseFloat(campoA.value), parseFloat(campoB.value));
    if (isValid) {
        valido.textContent = 'Valores validos!';
        valido.style.display = 'block';
        erro.style.display = 'none';
        campoA.value = '';
        campoB.value = '';
    } else {
        valido.style.display = 'none';
        erro.textContent = 'O valor não válido!';
        erro.style.display = 'block';
    }
});