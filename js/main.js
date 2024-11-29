$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    });

    $('#telefone').mask('(00) 0 0000-0000', {
        placeholder: '(DDD) 0 0000-0000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
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
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira um email valido',
            telefone: 'Por favor, insira um Telefone valido',
            cpf:'Por favor, Insira um CPF existente',
            endereco: 'Por favor, Insira um endereço valido',
            cep: 'Por favor, insira um cep valido'
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