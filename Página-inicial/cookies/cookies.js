//Função de cookies
var nvcookies = document.getElementById('cookies1')
function aceito() {
    localStorage.guardar = "yes"
    // Sistema de decisão, se sim o cookies sumira, se não ele continuara
    nvcookies.classList.remove('romero')
}
if (localStorage.guardar == 'yes') {
    nvcookies.classList.remove('romero')
    // Armazenar dados vazios ou prencidos
    localStorage.setItem('usuario', '')
    localStorage.setItem('validade', '')
    // Ler dados 

    //BOM
    localStorage.setItem("Altura da Janela " + window.innerHeight + " pixeis")
    localStorage.setItem("Largura da Janela " + window.innerWidth + " pixeis")
    //DOM

} else {
    nvcookies.classList.add('romero')
}
const clique = document.getElementById('botaocookies')
clique.addEventListener('mouseup', function () {
    alert('Obrigado por aceitar os cookies, tenha uma ótima visita')
})
//ler mais
function lermais() {
    document.getElementById("textocookies").innerHTML ="Política de Cookies <br> Este site utiliza cookies para melhorar sua experiência de navegação.<br>Os cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita nosso site. Eles nos ajudam a entender como você interage com nosso conteúdo e a personalizar sua experiência de acordo com suas preferências.<br>Tipos de Cookies que Utilizamos:<br>Cookies Essenciais: São necessários para o funcionamento básico do site e para que você possa navegar e utilizar suas funcionalidades.<br>Cookies de Desempenho: Coletam informações sobre como você utiliza o site, como as páginas que você visita e os erros que possam ocorrer.<br>Essas informações são utilizadas para melhorar o desempenho e a funcionalidade do site.<br>Cookies Funcionais: Permitem que o site se lembre das suas preferências, como o idioma ou a região em que você está, para fornecer uma experiência personalizada.<br>Cookies de Publicidade: Usados para exibir anúncios mais relevantes para você e para medir a eficácia das campanhas publicitárias. Eles podem ser colocados por terceiros que fornecem serviços de publicidade.<br>Como Controlar Cookies:Você pode ajustar as configurações do seu navegador para recusar cookies ou para alertá - lo quando um cookie estiver sendo enviado. No entanto, se você optar por desativar cookies, algumas funcionalidades do site podem não funcionar corretamente.<br>Consentimento:Ao continuar a navegar em nosso site, você concorda com o uso de cookies conforme descrito nesta política.<br>Se você tiver alguma dúvida sobre nossa política de cookies, entre em contato conosco."
    
}


