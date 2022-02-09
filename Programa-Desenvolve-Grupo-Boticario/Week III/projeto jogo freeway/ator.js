let yAtor = 365;
let xAtor = 100;
let colisao = false;
let pontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
       yAtor += 3; 
    }
  }
}  
  
function verificaColisao(){
  
  for (let i = 0; i < imagemDosCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaPosicao();
      somColisao.play();
      if (pontos < 0){
       pontos = 0; 
      } else {
        pontos -=1;
      }
    }
  }
}

function marcaPonto(){ 
  if (yAtor < 15) {
    pontos += 1;
    somDosPontos.play();
    voltaPosicao();
  }
}

function voltaPosicao(){
  yAtor = 365;
}

function exibirPontos(){
  textSize(22);
  text('Pontos: ', 380, 26);
  fill(color(255, 220, 60));
  text(pontos, 462, 26);
}

function podeSeMover(){
  return yAtor < 365;
}