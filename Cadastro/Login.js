//animação do label de Email ao estar em focus//

function animEmail(){
    document.getElementById("text-email").style.color = "blue";

    var p = 0
    clearInterval(id)
    var id = setInterval(frame, 3)
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
    clearInterval(id2)
    var id2 = setInterval(frame, 3)
    function frame(){
        if (p == 3){
            clearInterval(id2)
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
    clearInterval(id3)
    var id3 = setInterval(frame, 3)
    function frame(){
        if (p == 30){
            clearInterval(id3)
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
    clearInterval(id4)
    var id4 = setInterval(frame, 3)
    function frame(){
        if (p == 3){
            clearInterval(id4)
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




function animForm(){
    var forms = document.querySelectorAll("div");

    var b = 400
    clearInterval(id5)
    var id5 = setInterval(frame0, 1)

    function frame0(){
        if (b >= 820){
            clearInterval(id5)
        }

        else{
            b = b + 7
            forms[0].style.width = b + "px"
        }
    }

    var p = 400
    clearInterval(id6)
    var id6 = setInterval(frame, 1)

    function frame(){
        if (p == 500){
            clearInterval(id6)
        }

        else{
            p++
            forms[0].style.height = p + "px"
        }
    }

    document.getElementById("papas").style.display = "block"
}

var form1 = document.getElementById("login");
form1.addEventListener("click", animForm)