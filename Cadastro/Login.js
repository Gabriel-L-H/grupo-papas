//largura e altura da atual tela em px//
console.log("Largura atual: "+screen.width)
console.log("Altura atual: "+screen.height)

//alert ao carregar a página inteira e ocorre a aparição e animação de um pop-up logo após//
window.onload = function (){
    alert("Bem vindo, essa é a página de Login e Cadastro👍")
        var p = 0
        clearInterval(id)
        var id = setInterval(frame, 3)
        function frame(){
            if (p == 40){
                clearInterval(id)
            }
            
            else{
                p++
                document.getElementById("pop-up").style.top = p + "%"
            }
        }
}

//o que ocorre após apertar um dos botões do pop-up, mas antes os transformo num """array"""//
var buttons = document.querySelectorAll("button")

//ao clicar em saiba mais, leva a página sobre e faz o pop-up sumir//
buttons[1].addEventListener("click", function(){
    window.open ('../Pagina-pedidos/pedidos.html', 'pagina', "width=650 height=500")
    document.getElementById("pop-up").style.display = "none"
})

//ao clicar em talvez mais tarde, faz uma animação para o pop-up sumir indo para baixo//
buttons[2].addEventListener("click", function(){
    p = 40
    clearInterval(id1)
    var id1 = setInterval(frame1, 1)
    function frame1 (){
        if (p == 100){
            clearInterval(id1)
            document.getElementById("pop-up").style.display = "none"
        }

        else{
            p++
            document.getElementById("pop-up").style.top = p + "%"
        }
    }
}
)

//ajustando posição do label de cpf//
document.getElementById("text-cpf").style.position = "relative"
document.getElementById("text-cpf").style.left = 18 + "%"
document.getElementById("text-cpf").style.bottom = -8 + "px"

var labels = document.querySelectorAll("label")
var inputs = document.querySelectorAll("input")

const animLabel = function (a) {
    if (inputs[a].value != ""){
        return
    }
    else{
    labels[a].style.color = "blue";

    if (a === 2){
        var p = 15
        clearInterval(id)
        var id = setInterval(frame0, 3)
        function frame0(){
            if (p == 45){
                clearInterval(id)
            }
        
            else{
                p++
                labels[a].style.bottom = p + "px"
            }
        }
        }

    else{
        var p = 0
        clearInterval(id)
        var id = setInterval(frame0, 3)
        function frame0(){
            if (p == 30){
                clearInterval(id)
            }
        
            else{
                p++
                labels[a].style.bottom = p + "px"
            }
        }
    }
}   
}

const animLabelCancel = function (b){
    if (inputs[b].value.trim() == ""){
        var p = 30
        labels[b].style.color = "white"
        if(b === 0 || b === 1){
        clearInterval(id2)
        var id2 = setInterval(frame2, 3)
        function frame2(){
            if (p == 2){
                clearInterval(id2)
            }
     
            else{
                p--
                labels[b].style.bottom = p + "px"
            }
        }
    }

        if (b === 2) {
            var id2 = setInterval(frame2, 3)
            function frame2() {
                if (p <= 15) {
                    clearInterval(id2)
                }

                else {
                    p--
                    labels[b].style.bottom = p + "px"
                }
            }
        }

        else if(b === 3 || b === 4){
            var id2 = setInterval(frame2, 3)
            function frame2() {
                if (p <= -8) {
                    clearInterval(id2)
                }

                else {
                    p--
                    labels[b].style.bottom = p + "px"
                }
            }
        }
}

    //se estiver preenchido, fica onde está//
        else{
            labels[b].style.color = "blue"
            labels[b].style.bottom = 30 + "px"
        }
}

inputs.forEach((item, indice) => {
    item.addEventListener("focus", () => animLabel(indice))
    item.addEventListener("blur", () => animLabelCancel(indice))
})
 
//convertendo label email, cpf e telefone para variaveis
var elementEmail = document.getElementById("email");
var elementCPF = document.getElementById("cpf");
var elementTel = document.getElementById("tel");

//ao mudar o input email todos seus valores (digitos) serão convertidos para minúsculos automaticamente//
elementEmail.addEventListener("change", function(){
    elementEmail.value = elementEmail.value.toLowerCase()
})

//chamando uma função para delimitar como o input de cpf e telefone devem ser preenchidos//
elementCPF.addEventListener("keypress", function(){
    var tamanhoCampo = elementCPF.value.length

    if(tamanhoCampo == 3 || tamanhoCampo == 7){
        elementCPF.value += "."
    }

    else if(tamanhoCampo == 11){
        elementCPF.value += "-"
    }
})

elementTel.addEventListener("keypress", function(){
    var tamanhoCampo = elementTel.value.length

    if(tamanhoCampo == 0){
        elementTel.value += "("
    }

    if(tamanhoCampo == 3){
        elementTel.value += ")"
    }
    if(tamanhoCampo == 9){
        elementTel.value += "-"
    }
})

//chamando uma função para limitar os digitos no cpf apenas para números e a letra x e no telefone, somente números,//
//caso o contrário não aparece em ambos os casos//
//Nota: o "e" e "f" das functions está chamando o keypress (tecla pressionada) e key se refere a tecla//
elementCPF.addEventListener("keypress", function(e){
    var n = e.key 
    if (n != 0 && n != 1 && n != 2 && n != 3 && n != 4 && n != 5 && n != 6 && n != 7 && n != 8 && n != 9 && n != "x"){
        e.preventDefault()
    } 
})

elementTel.addEventListener("keypress", function(f){
    var n = f.key 
    if (n != 0 && n != 1 && n != 2 && n != 3 && n != 4 && n != 5 && n != 6 && n != 7 && n != 8 && n != 9){
        f.preventDefault()
    } 
})
 
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
    
    //Fazendo o papas aparecer em dentro de 1 segundo//
    setTimeout(function() {document.getElementById("papas").style.display = "inline"}, 100)
    
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
        p[1].style.display = "block"
        p[1].id = "p1"
        document.getElementById("p1").style.left = 56 + "%"
        document.getElementById("p1").style.maxWidth = 25 + "%"
        document.getElementById("p1").style.bottom = 45 + "px"
    }, 1200)
 
    //Fazendo o papas andar e desaparecer
    var c = -1000
    clearInterval(id7)
    var id7 = setInterval(frame1, 1)
    function frame1(){
        if (c == 1300){
            clearInterval(id7)
            document.getElementById("papas").style.display = "none"
        }
 
        else{
            c = c + 5
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
        //animando o retângulo vermelho para voltar ao tamanho anterior//
        var retanguloRed = document.querySelectorAll("div");
     
        var b = 820
        clearInterval(id9)
        var id9 = setInterval(frame0, 1)
     
        function frame0(){
            if (b <= 422){
                clearInterval(id9)
            }
     
            else{
                b = b - 7
                retanguloRed[0].style.width = b + "px"
            }
        }
        
        var p = 430
        clearInterval(id10)
        var id10 = setInterval(frame, 1)
     
        function frame(){
            if (p <= 400){
                clearInterval(id10)
            }
     
            else{
                p--
                retanguloRed[0].style.height = p + "px"
            }
        }

        //Fazendo o p do cadastro desaparecer e adicionando o p do login//
        setTimeout(function () {var p = document.querySelectorAll("p")
            p[1].style.display = "none"
            p[0].style.display = "block"
        }, 90)

        //Mudando h1 de cadastro para Login//
        document.getElementById("cadastro").style = "none"
        var h1 = document.querySelectorAll("h1")
        h1[0].innerHTML = "Login"

        //Ajustando a posição do form como um todo ao estado inicial//
        var id11 = setInterval(frame1, 1)
        a = -50
        function frame1(){
            var forms = document.getElementById("login")
            if (a == 44){
                clearInterval(id11)
            }
     
            else{
                a++
                forms.style.left = a + "px"
            }
           
            var imgs = document.querySelectorAll("img")
            
            inputs[0].style.width = 190 + "px"
            inputs[1].style.width = 190 + "px"
     
            labels[0].style.right = 133 + "px"
            labels[1].style.right = 133 + "px"
     
            imgs[0].style.left = 234 + "px"
            imgs[1].style.left = 234 + "px"
        }
    }

var form1 = document.getElementById("cadastre-se");
form1.addEventListener("click", animForm)

var form0 = document.getElementById("entre");
form0.addEventListener("click", animFormLogin)