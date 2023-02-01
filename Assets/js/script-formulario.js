$(document).ready(function(){
    $('#cep').blur(function(){
        var cep = $(this).val();
        if (cep != ""){
            var validaCep = /^[0-9]{8}$/;
            if (validaCep.test(cep)){
                $('#rua').val('...');
                $('#bairro').val('...');
                $('#cidade').val('...');
                $('#estado').val('...');
                $('#ibge').val('...');
                $('#ddd').val('...');
            }else{
                alert('Cep Inválido!')
            };
        }
        $.get(`https://viacep.com.br/ws/${cep}/json/`, function(dados, status){
            if(!("erro" in dados)){
                $('#rua').val(dados.logradouro);
                $('#bairro').val(dados.bairro);
                $('#cidade').val(dados.localidade);
                $('#estado').val(dados.uf);
                $('#ibge').val(dados.ibge);
                $('#ddd').val(dados.ddd);
           }else{
            alert("CEP não encontrado.")
           };
        
        });
        $('#limpa').click(function(){
            $('#cep').val('');
            $('#rua').val('');
            $('#bairro').val('');
            $('#cidade').val('');
            $('#estado').val('');
            $('#ibge').val('');
            $('#ddd').val('');
            });
        });
});

