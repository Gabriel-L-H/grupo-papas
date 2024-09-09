var botaos = document.querySelectorAll(".meubotao")
var botaom = document.querySelectorAll(".meubotaonao")
const quant = document.querySelectorAll(".quant")
var nana = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 

botaos.forEach((botao, pedro) => {
    botao.addEventListener("click", () => {
        quant[pedro].innerHTML = nana[pedro] += 1
    })
});

botaom.forEach((botaon, pedros) => {
    botaon.addEventListener("click", () => {
        if (nana[pedros] >= 1) {
            quant[pedros].innerHTML = nana[pedros] -= 1
            
        } else {
            quant[pedros].innerHTML = 0

        }
    })
})