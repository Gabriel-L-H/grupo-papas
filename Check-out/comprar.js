function val_compra() {
 var ccpf = parseInt (document.getElementById('cpf')).value;
 var ceep  = parseInt (document.getElementById('numericInput').addEventListener('cep')).value;
  if(ccpf == isNaN && ceep == isNaN ){
    alert('Somente números')
  } else {
    alert('Compra concluída')
  }
}