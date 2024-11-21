/* usado no jquery*/ 
$(document).ready(function() {
    // Mostrar o formulário ao clicar no botão "Adicionar Tarefa"
    $('header button').click(function() {
        $('form').slideDown();
    });

    // Ocultar o formulário ao clicar no botão "Cancelar"
    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    // Submissão do formulário para adicionar a tarefa
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const tarefaNova = $('#tarefa-nova').val().trim();
        if (tarefaNova) {
            const novoItem = $('<tr><td>' + tarefaNova + '</td></tr>');

            // Adiciona o item ao corpo da tabela e o anima
            $('tbody').append(novoItem);
            novoItem.hide().fadeIn(500);  // Animação de fadeIn

            // Limpar o campo de input e esconder o formulário
            $('#tarefa-nova').val('');
            
        }
    });

    // Evento de clique para riscar a tarefa quando clicada
    $('tbody').on('click', 'td', function() {
        $(this).toggleClass('riscado');
    });
});   