document.addEventListener('DOMContentLoaded', function(){
    var nome = document.getElementById('nome');
    var sobrenome = document.getElementById('sobrenome');
    var email = document.getElementById('email');

    nome.addEventListener('keyup', function(){
        if(nome.value == ''){
            window.alert('Digite seu nome!')
        };

        if(nome.value.length <3){
            console.log('Caracteres insuficiente!')
        };
    });

    sobrenome.addEventListener('keyup', function(){
        if(sobrenome.value == ''){
            window.alert('Digite seu sobrenome!')
        };

        if(sobrenome.value.length <3){
            console.log('Caracteres insuficiente!')
        };
    });

    email.addEventListener('keyup', function(){
        if(email.value == ''){
            window.alert('Digite seu email!')
        };

        if(email.value.length <3){
            console.log('Caracteres insuficiente!')
        };
    });
});