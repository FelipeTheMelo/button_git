const form   = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const acerto = document.getElementById('valido');
const erro   = document.getElementById('invalido');

function validaValor(campoA, campoB){
    return campoB > campoA
}

form.addEventListener('submit', function(e){
    e.preventDefault();


let validaForm = CalculaNumber(campoA.valueAsNumber, campoB.valueAsNumber)
if (validaForm){
    acerto.style.display = 'block';
    campoA.value='';
    campoB.value='';
} else{
    alert('O valor é inválido!')
}

})

campoA.addEventListener('keyup', function(e){
    let validaForm = CalculaNumber(campoA.valueAsNumber, campoB.valueAsNumber)
    if(!validaForm){
        erro.style.display = 'block';
        acerto.style.display = 'none';
    } else{
        erro.style.display = 'none';
    }


})