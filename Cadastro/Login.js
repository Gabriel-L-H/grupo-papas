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
 
 
 
//animação ao clicar em cadastrar-se//
function animForm(){
    //animando o retângulo vermelho
    var retanguloRed = document.querySelectorAll("div");
 
    var b = 400
    clearInterval(id5)
    var id5 = setInterval(frame0, 1)
 
    function frame0(){
        if (b >= 820){
            clearInterval(id5)
        }
 
        else{
            b = b + 7
            retanguloRed[0].style.width = b + "px"
        }
    }
 
    var p = 400
    clearInterval(id6)
    var id6 = setInterval(frame, 1)
 
    function frame(){
        if (p == 430){
            clearInterval(id6)
        }
 
        else{
            p++
            retanguloRed[0].style.height = p + "px"
        }
    }
    
    //Fazendo o papas aparecer em maios ou menos 1 segundo//
    setTimeout(function() {document.getElementById("papas").style.display = "inline"}, 980)
    
    //mudando display do id cadastro//
    setTimeout(function() {document.getElementById("cadastro").style.display = "flex"}, 1300)
    
    //adicionando texto depois de um tempo//
    setTimeout(function () {var h1 = document.getElementsByTagName("h1")
                            h1[0].innerHTML = "Cadastro"
    }, 980)
    
    //fazendo um p sumir depois de um tempo//
    setTimeout(function () {var p = document.querySelectorAll("p")
                            p[0].style.display = "none"    
    }, 980)
    
    //adicionando p depois de um tempo
    setTimeout(function () {var p = document.querySelectorAll("p")
        p[0].insertAdjacentHTML("afterend", "<p id='p1'>Já possui login? <b id='entre'>Entre</b>😊</p>")
        document.getElementById("p1").style.left = 56 + "%"
        document.getElementById("p1").style.maxWidth = 25 + "%"
        document.getElementById("p1").style.bottom = 45 + "px"
    }, 1200)
 
    //Fazendo o papas andar e desaparecer
    var c = 300
    clearInterval(id7)
    var id7 = setInterval(frame1, 3)
    function frame1(){
        if (c == 1300){
            clearInterval(id7)
            document.getElementById("papas").style.display = "none"
        }
 
        else{
            c++
            document.getElementById("papas").style.left = c + "px"
        }
 
    }
 
    //animando o form como um todo//
    var forms = document.getElementById("login")
    var a = 90
    var id8 = setInterval(frame2, 1)
 
    function frame2(){
        if (a == -50){
            clearInterval(id8)
        }
 
        else{
            a--
            forms.style.left = a + "px"
        }
       
        var inputs = document.querySelectorAll("input")
        var labels = document.querySelectorAll("label")
        var imgs = document.querySelectorAll("img")
 
        inputs[0].style.width = 230 + "px"
        inputs[1].style.width = 230 + "px"
 
        labels[0].style.right = 110 + "px"
        labels[1].style.right = 110 + "px"
 
        imgs[0].style.left = 350 + "px"
        imgs[1].style.left = 350 + "px"
    }
 
}
 
function animFormLogin(){
        //animando o retângulo vermelho
        var retanguloRed1 = document.querySelectorAll("div");
     
        var b = 820
        clearInterval(id5)
        var id5 = setInterval(frame0, 1)
     
        function frame0(){
            if (b <= 400){
                clearInterval(id5)
            }
     
            else{
                b = b - 7
                retanguloRed[0].style.width = b + "px"
            }
        }
     
        var p = 430
        clearInterval(id6)
        var id6 = setInterval(frame, 1)
     
        function frame(){
            if (p <= 400){
                clearInterval(id6)
            }
     
            else{
                p--
                retanguloRed[0].style.height = p + "px"
            }
        }
    }

var form0 = document.getElementById("entre");
form0.addEventListener("click", animFormLogin)

var form1 = document.getElementById("cadastre-se");
form1.addEventListener("click", animForm)