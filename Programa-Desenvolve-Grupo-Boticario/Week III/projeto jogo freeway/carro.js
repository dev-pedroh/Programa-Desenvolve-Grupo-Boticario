let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 97, 148, 214, 262, 323];
let velocidadeCarros = [4, 2.6, 3.2, 5, 2.1, 3.4];
let comprimentoCarro = 50;
let alturaCarro = 35;
    
function mostraCarro() {
  for (let i = 0; i < imagemDosCarros.length; i++){
    image(imagemDosCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro); 
  }
}
  
function movimentaCarro(){
  for (let i = 0; i < xCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];  
  }
}

function loopCarro(){
  for (let i = 0; i < xCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600; 
    }
  }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}