function ligar(){
  document.getElementById("lamp").src = "img/pic_bulbon.gif";
}

function desligar(){
  document.getElementById("lamp").src = "img/pic_bulboff.gif";
}

function onOff(){
  let imagem = document.getElementById("lamp2").src;
  if (imagem.includes('pic_bulloff')) {
    document.getElementById("lamp2").src = 'img/pic_bulbon.gif';
  }else{
    document.getElementById("lamp2").src = 'img/pic_bulboff.gif';
  }
}
