const form = document.getElementById('form-btn');
const campoA = document.getElementById('campoA')
let formEValido = false;
function validaNome(campoA){
    const nomeComoArray = campoA.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    
    e.preventDefault();
    
    const campoB = document.getElementById('campoB')
    const mensagemSucesso = `O valor de: <b> ${campoA.value} </b> é válido`

    formEValido = validaNome(campoA.value)
    if (formEValido) {
        const contairnerMenssagemSucesso = document.querySelector('success-message');
        contairnerMenssagemSucesso.innerHTML = mensagemSucesso;
        contairnerMenssagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        campoA.style.border = '1px solid red';
        document.querySelector('error-message').style.display = 'block';
    }

})

campoA.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        campoA.classList.add('error');
        document.querySelector('error-message').style.display = 'block';
    } else {
        campoA.classList.remove('error');
        document.querySelector('error-message').style.display = 'none';
    }
});