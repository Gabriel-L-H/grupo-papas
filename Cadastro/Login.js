//animação do label de Email ao estar em focus//
var id = null
function animEmail(){
    document.getElementById("text-email").style.color = "blue";

    var p = 0
    clearInterval(id)
    id = setInterval(frame, 3)
    function frame(){
        if (p == 30){
            clearInterval(id)
        }

        else{
            p++
            document.getElementById("text-email").style.bottom = p + "px"
        }
    }
};

//animação do label de Email ao estar em blur//
function animEmailCancel(){
    document.getElementById("text-email").style.color = "white";

    var p = 30
    clearInterval(id)
    id = setInterval(frame, 3)
    function frame(){
        if (p == 3){
            clearInterval(id)
        }

        else{
            p--
            document.getElementById("text-email").style.bottom = p + "px"
        }
    }
};

//animação do label de senha ao estar em focus//
function animSenha(){
    document.getElementById("text-senha").style.color = "blue";

    var p = 0
    clearInterval(id)
    id = setInterval(frame, 3)
    function frame(){
        if (p == 30){
            clearInterval(id)
        }

        else{
            p++
            document.getElementById("text-senha").style.bottom = p + "px"
        }
    }
};

//animação do label de senha ao estar em blur//
function animSenhaCancel(){
    document.getElementById("text-senha").style.color = "white";

    var p = 30
    clearInterval(id)
    id = setInterval(frame, 3)
    function frame(){
        if (p == 3){
            clearInterval(id)
        }

        else{
            p--
            document.getElementById("text-senha").style.bottom = p + "px"
        }
    }
};

//convertendo label email e senha para variaveis
var elementEmail = document.getElementById("email");
var elementSenha = document.getElementById("senha");

//chamando as funções de animação do email e senha ao estar em focus ou blur//
elementEmail.addEventListener("focus", animEmail);
elementEmail.addEventListener("blur", animEmailCancel);

elementSenha.addEventListener("focus", animSenha);
elementSenha.addEventListener("blur", animSenhaCancel);