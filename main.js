function login()
{
    const login = "olimpiada";
    const password = "1234";
   
    let loginDig = document.getElementById("username").value;
    let senhaDig = document.getElementById("userpassword").value;

    if(loginDig == login && senhaDig == password){
        window.location.href = "index.html";
        let continuarLogado = document.getElementById("lembre-me");

        if(continuarLogado){
            document.cookie = "logado=1";

        }

        window.location.href = "index.html"

    } else{
        alert("Login inexistente");
    }
}

function register(){
    
}

function caminhoRegister(){
    window.location.href = "registrar.html";
}

function caminhoLogin(){
    window.location.href = "projetoWeb.html";
}

