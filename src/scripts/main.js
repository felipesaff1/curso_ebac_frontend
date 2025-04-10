document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let num1 = parseFloat(document.getElementById('numerador').value);
        let num2 = parseFloat(document.getElementById('denominador').value);
        let operacao = document.getElementById('operacao').value;
        switch (operacao) {
            case "soma":
                resultado = num1 + num2;
                break;
            case "subtracao":
                resultado = num1 - num2;
                break;
            case "multiplicacao":
                resultado = num1 * num2;
                break;
            case "divisao":
                resultado = num2 !== 0 ? num1 / num2 : "Erro (divisão por zero)";
                break;
            default:
                resultado = "Operação inválida";
        }
        //alert(resultado);
        document.getElementById('resultado-valor').innerText= resultado;
        document.querySelector('.resultado').style.display='block';
    })
})