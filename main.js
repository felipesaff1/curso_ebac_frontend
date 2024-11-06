const form = document.getElementById('form-deposito');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');
let formEValido = false;

function validaNumeros(A,B){
    const somatoria=B-A;
    return somatoria >= 1;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Parabéns! O valor de A: <b>${numeroA.value}</b> é menor que o valor de B: <b>${numeroB.value}</b>`;

    formEValido = validaNumeros(numeroA.value,numeroB.value);
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
        
    }else{
        numeroB.classList.add('error');
        document.querySelector('.error-number').style.display ='block';
    }

})
numeroB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNumeros(numeroA.value, numeroB.value);

    if (!formEValido){
        numeroB.classList.add('error');
        //nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-number').style.display ='block';
    }else{
        numeroB.classList.remove('error')
        //nomeBeneficiario.style.border = '';
        document.querySelector('.error-number').style.display ='none';
    }
});
