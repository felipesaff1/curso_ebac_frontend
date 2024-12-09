$(document).ready(function(){
    $('#telefone').mask('(00) 0 0000-0000', {
        placeholder: '(DDD) 0 0000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira um email valido',
            telefone: 'Por favor, insira um Telefone valido'

        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos nao preenchidos`)
            }
        }
    })
})