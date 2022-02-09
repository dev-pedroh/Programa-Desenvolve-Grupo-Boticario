let imagemDaEstrada;
let imagemDoAtor;

let somDaTrilha;
let somDosPontos;
let somColisao;

function preload(){
  imagemDaEstrada = loadImage("C:\Users\FERNANDA\Documents\GitHub\Programa-Desenvolve-Grupo-Boticario\Week III\projeto freeway\imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro1 = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemDosCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDosPontos = loadSound("sons/pontos.wav");
  somColisao = loadSound("sons/colidiu.mp3");
}