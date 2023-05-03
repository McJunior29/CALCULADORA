var tela = document.getElementById("tela");
var expressao = "";

function adicionarNumero(numero) {
  expressao += numero;
  tela.value = expressao;
}

function operacao(simbolo) {
    if(simbolo == ""){
        expressao = expressao / 100;
        tela.value = expressao;
      }else{
        expressao += simbolo;
        tela.value = expressao;
      }
}

function apagarMemoria(){
    tela.value = "";
    expressao = "";
}

function apagar(){
    var string = tela.value;
    string = string.substring(0, string.length - 1);
    tela.value = string;
    expressao = string;
}

function calcular() {
  var resultado = eval(expressao);
  tela.value = resultado;
  expressao = resultado;
}

function abrirPopup() {
    var conteudo = document.getElementById("tela");
    var largura = conteudo.offsetWidth;
    var altura = conteudo.offsetHeight;
  
    window.open("corpoCal.html", "", "width=" + largura + ",height=" + altura);
  }
  
