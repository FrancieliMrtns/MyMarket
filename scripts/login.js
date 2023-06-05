
const form = document.getElementById("form");
const email = document.getElementById("email");
const senha = document.getElementById("senha");


var err_mail = document.getElementById("info_email"); 
var err_senha = document.getElementById("info_senha"); 


form.addEventListener("submit", (e) => {
 
    e.preventDefault();
   
    checkLogin();
});

function checkLogin() {

    
    const email_valida = 'mymarket@email.com'; 
    const senha_valida = '123456';

    
    const email_value = email.value;
    const senha_value = senha.value;

 
    if (email_value !== email_valida) {
       
        err_mail.className = "mens error";
  
    } else if (senha_value !== senha_valida) {
        
        err_mail.className = "mens";
       
        err_senha.className = "mens error";
    } else {
    
        window.location.href = '../paginas/frutas.html';
    }
}