const form = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const acerto = document.getElementById('valido');
const erro = document.getElementById('erro');

function validaValor(campoA, campoB) {
    return campoB > campoA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = validaValor(campoA.valueAsNumber, campoB.valueAsNumber);
    if (isValid) {
        acerto.textContent = 'Valores válidos!';
        acerto.style.display = 'block';
        erro.style.display = 'none';
        campoA.value = '';
        campoB.value = '';
    } else {
        acerto.style.display = 'none';
        erro.textContent = 'O valor é inválido!';
        erro.style.display = 'block';
    }
});