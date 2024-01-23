const form = document.getElementById('container');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const valido = document.getElementById('valido');
const erro = document.getElementById('erro');

function validaValor(campoB, campoA) {
    return campoB > campoA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = validaValor(campoA.value, campoB.value);
    if (isValid) {
        valido.textContent = 'Valores válidos!';
        valido.style.display = 'block';
        erro.style.display = 'block';
        campoA.value = '';
        campoB.value = '';
    } else {
        valido.style.display = 'none';
        erro.textContent = 'O valor é inválido!';
        erro.style.display = 'block';
    }
});