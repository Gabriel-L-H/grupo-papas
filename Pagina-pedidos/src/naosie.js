var botaos = document.querySelectorAll(".meubotao")
var botaom = document.querySelectorAll(".meubotaonao")
const quant = document.querySelectorAll(".quant")

var nana = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var mama = [87.90, 35, 40, 45, 50, 55, 60, 32, 38, 44, 48, 52, 58, 62, 70, 75, 80, 85, 90, 95]
var haha = ["Margherita",
    "calabresa",
    "Frango com Requeijão",
    "Pepperoni",
    "Quatro Queijos",
    "Frango com Catupiry",
    "Peperoni com Pimenta",
    "Portuguesa",
    "Napolitana",
    "Baiana",
    "Toscana",
    "Alho e Óleo",
    "Vegetariana",
    "Mussarela",
    "Atum",
    "Palmito",
    "Brócolis com Bacon",
    "Camarão",
    "Carne Seca com Catupiry",
    "Lombo com Catupiry"]
// Primeira parte

const conteinertotal = document.querySelector(".total")
const finalizarpedido = document.querySelector(".finalizar-pedido")
// Segunda parte

var telafinalhtml = document.querySelector(".tela-final")
var overlay = document.getElementById("darkOverlay")
const voltar = document.querySelector(".voltar")
var formapagamento = document.querySelectorAll(".botao-forma-pagamento")
var botaofinal = document.querySelector(".enviar")
// Ultima parte


botaos.forEach((botao, pedro) => {
    botao.addEventListener("mousedown", alterarCorAoClicar_mais)
    botao.addEventListener("mouseup", voltarCor_mais)
    botao.addEventListener("mouseleave", voltarCor_mais)
    botao.addEventListener("click", () => {
        quant[pedro].innerHTML = nana[pedro] += 1
        valortotal()
    })
});

botaom.forEach((botaon, pedros) => {
    botaon.addEventListener('mousedown', alterarCorAoClicar_menos)
    botaon.addEventListener('mouseup', voltarCor_menos)
    botaon.addEventListener("mouseleave", voltarCor_menos)
    botaon.addEventListener("click", () => {
        if (nana[pedros] >= 1) {
            quant[pedros].innerHTML = nana[pedros] -= 1

        } else {
            quant[pedros].innerHTML = 0

        }
        valortotal()
    })
})

function valortotal() {
    var total = 0;
    for (var i = 0; i < nana.length; i++) {
        total += nana[i] * mama[i];
        // Multiplica quantidade pelo preço
    }

    if (total == 0) {
        conteinertotal.style.opacity = "0";
        conteinertotal.style.zIndex = "-1"
        conteinertotal.style.transition = "opacity 1s ease, z-index 1s ease";
    } else {
        conteinertotal.style.opacity = "1";
        conteinertotal.style.zIndex = "999"
        conteinertotal.style.transition = "opacity 1s ease, z-index 1s ease";
    }

    document.querySelector(".valor-total").innerHTML = "Tatal: R$ " + total.toFixed(2)

    var quantpizzas = 0
    for (q = 0; q < nana.length; q++) {
        quantpizzas += nana[q]

    }

    if (quantpizzas == 1) {
        document.querySelector(".total-pizzas").innerHTML = "Você pediu " + quantpizzas + " pizza"
    } else {
        document.querySelector(".total-pizzas").innerHTML = "Você pediu " + quantpizzas + " pizzas"

    }


    // Exibe o valor total atualizado na página
}


function voltarCor_mais(event) {
    event.target.style.backgroundColor = "#3d5fce" // Cor original

}

function alterarCorAoClicar_mais(event) {
    event.target.style.backgroundColor = "#263c86" // Cor ao clicar
}
// Muda a cor do botão de mais

function voltarCor_menos(event) {
    event.target.style.backgroundColor = "#fab828" // Cor original

}

function alterarCorAoClicar_menos(event) {
    event.target.style.backgroundColor = "#f59827" // Cor ao clicar
}
// Muda a cor do botão menos

finalizarpedido.addEventListener("click", telafinal)

voltar.addEventListener("click", removetelafinal)

function telafinal() {
    telafinalhtml.style.opacity = "1"
    telafinalhtml.style.zIndex = "999"
    telafinalhtml.style.transition = "opacity 1.5s ease, z-index 0.9s ease"

    document.body.style.overflow = "hidden"

    overlay.style.zIndex = "998"
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
    
        conteinertotal.style.opacity = "0"
        conteinertotal.style.zIndex = "-1"
        conteinertotal.style.transition = "opacity 1.5s ease, z-index 1.1s ease"

        completarCampos()
}

function removetelafinal() {
    telafinalhtml.style.opacity = "0"
    telafinalhtml.style.zIndex = "-1"
    telafinalhtml.style.transition = "opacity 1.5s ease, z-index 1.1s ease"

    document.body.style.overflow = "auto"

    overlay.style.zIndex = "-1"
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)"

    conteinertotal.style.opacity = "1"
    conteinertotal.style.zIndex = "999"
    conteinertotal.style.transition = "opacity 1s ease, z-index 1s ease"
    

}

formapagamento.forEach((forma, formaPag) => {
    forma.addEventListener("click", () => {
        var cor = ["#00cf00", "#ffff00", "#02e7ad"]

        // Resetar a cor de fundo de todos os botões para a cor original (ex: branco)
        formapagamento.forEach(f => f.style.backgroundColor = '')

        // Aplicar a cor correspondente ao botão clicado
        forma.style.backgroundColor = cor[formaPag]

        // permite apertar o botão final
        botaofinal.addEventListener("click", ativarbotaofinal)
    })
})

function ativarbotaofinal() {
    window.location.assign("../Página-inicial/index.html")
}

let slideAtual = 0;
const totalSlides = document.querySelectorAll('.slide').length
const slides = document.getElementById('slides')

function completarCampos() {
    // Usa getItem para recuperar o valor armazenado
    const endereco = localStorage.getItem("meuendereco")

    // Verifica se o endereço existe antes de preenchê-lo
    if (endereco) {
        document.querySelector("#rua").value = endereco
    } else {
        console.log("Nenhum endereço salvo")
    }
}
