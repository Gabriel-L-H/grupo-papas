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
var overlay = document.getElementById("darkOverlay");
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
    event.target.style.backgroundColor = "#00cd00" // Cor original

}

function alterarCorAoClicar_mais(event) {
    event.target.style.backgroundColor = "#009246" // Cor ao clicar
}
// Muda a cor do botão de mais

function voltarCor_menos(event) {
    event.target.style.backgroundColor = "#ff0000" // Cor original

}

function alterarCorAoClicar_menos(event) {
    event.target.style.backgroundColor = "#CE2B37" // Cor ao clicar
}
// Muda a cor do botão menos

finalizarpedido.addEventListener("click", telafinal)

voltar.addEventListener("click", removetelafinal)

function telafinal() {
    telafinalhtml.style.opacity = "1"; // Torna a tela final visível
    telafinalhtml.style.zIndex = "999"; // Traz a tela final para a frente
    telafinalhtml.style.transition = "opacity 1.5s ease, z-index 0.9s ease";

    document.body.style.overflow = "hidden"; // Impede o scroll da página

    overlay.style.zIndex = "998"; // Define o overlay atrás da tela final
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Aplica um fundo escuro semi-transparente

    conteinertotal.style.opacity = "0"; // Torna a tela final invisível
    conteinertotal.style.zIndex = "-1"
    conteinertotal.style.transition = "opacity 1.5s ease, z-index 1.1s ease";
}

function removetelafinal() {
    telafinalhtml.style.opacity = "0"; // Torna a tela final invisível
    telafinalhtml.style.zIndex = "-1"; // Define um z-index inferior mas visível para outros elementos
    telafinalhtml.style.transition = "opacity 1.5s ease, z-index 1.1s ease";

    document.body.style.overflow = "auto"; // Permite o scroll novamente

    overlay.style.zIndex = "-1"; // Coloca o overlay atrás de tudo
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Torna o fundo do overlay transparente

    conteinertotal.style.opacity = "1";
    conteinertotal.style.zIndex = "999"
    conteinertotal.style.transition = "opacity 1s ease, z-index 1s ease";

}

formapagamento.forEach((forma, qualforma) => {
    forma.addEventListener("click", () => {
        var cor = ["#00cf00", "#ffff00", "#02e7ad"]

        // Resetar a cor de fundo de todos os botões para a cor original (ex: branco)
        formapagamento.forEach(f => f.style.backgroundColor = '')

        // Aplicar a cor correspondente ao botão clicado
        forma.style.backgroundColor = cor[qualforma]

        // permite apertar o botão final
        botaofinal.addEventListener("click", ativarbotaofinal)
    })
})

function ativarbotaofinal() {
    window.location.assign("../Página-inicial/index.html")
}


// Grafico 
// Carrega a biblioteca do Google Charts
google.charts.load('current', { 'packages': ['corechart'] });

// Define a função do gráfico
function drawChart() {
    const nutri = document.querySelector("#myChart");

    nutri.style.opacity = "1"; // Torna a tela final visível
    nutri.style.zIndex = "999"; // Traz a tela final para a frente
    nutri.style.transition = "opacity 1.5s ease, z-index 0.9s ease";

    document.body.style.overflow = "hidden"; // Impede o scroll da página

    // Define os dados do gráfico
    const data = google.visualization.arrayToDataTable([
        ['Tipo', 'Gramas'],
        ['Carboidratos', 340],
        ['Gorduras', 100],
        ['Proteínas', 270],
    ]);

    // Define as opções do gráfico
    const options = {
        title: 'Valores Nutricionais'
    };

    // Desenha o gráfico
    const chart = new google.visualization.PieChart(nutri);
    chart.draw(data, options);

    // Torna o gráfico visível
    nutri.style.display = 'block';

    // Criar o botão "Fechar"
    const botao = document.createElement("button");
    botao.classList.add("fechar");
    botao.textContent = "X";

    // Adiciona o botão ao container do gráfico
    nutri.appendChild(botao);

    // Adiciona evento ao botão para fechar o gráfico
    botao.addEventListener("click", fecharNutri);
}

// Função para fechar o gráfico
function fecharNutri() {
    const nutri = document.querySelector("#myChart");

    nutri.style.opacity = "0"; // Torna a tela final invisível
    nutri.style.zIndex = "-1"; // Define um z-index inferior mas visível para outros elementos
    nutri.style.transition = "opacity 1.5s ease, z-index 1.1s ease";

    document.body.style.overflow = "auto"; // Permite o scroll novamente

    // Remove o botão "Fechar" do DOM
    const botaoFechar = document.querySelector(".fechar");
    if (botaoFechar) {
        botaoFechar.remove();
    }
}

// Adiciona o evento de clique ao botão principal
document.getElementById('chamar-grafico').addEventListener('click', drawChart);
