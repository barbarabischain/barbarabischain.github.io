let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    if(nome.value.lenght < 3){
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    }
    else{
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
    }
}

function validaEmail(){
   let txtEmail = document.querySelector('#email')
   if(email.value.indexOf('@') == -1 ){
    txt.innerHTML = 'Email Inválido'
    txt.style.color = 'red'
   }
   else{
    txt.innerHTML = 'Nome Válido'
    txt.style.color = 'green'
}
}

function validaAssunto(){
    let txtEmail = document.querySelector('#assunto')
    if(assunto.value.indexOf >= 100){
     txtAssunto.innerHTML = 'Assunto Inválido'
     txt.style.color = 'red'
    }
 }
