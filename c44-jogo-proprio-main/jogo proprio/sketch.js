
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bife,bifeimg;
var car,carimg1,carimg2,carimg3,motoimg;
var pessoas,pessoaimg1,pessoaimg2,pessoaimg3;
var casa,casaimg;
var dog,dogeat,dogrun,dogobs,dogfim,doginicio;
var policia,policiaimg1,policiaimg2;
var gameOver,gameOverimg;
var floresta,florestaimg;
var pedra,pedraimg;
var arvore,arvoreimg;

function preload()
{
  dogeat=loadImage("dogEat.png")
  dogobs=loadImage("dogObs.png")
  dogfim=loadImage("dogFim.png")
  doginicio=loadImage("dogInicio.png")
  dogrun=loadAnimation("dogRun1.png","dogRun2.png")
  bifeimg=loadImage("bife.png")
  carimg1=loadImage("carro1.png")
  carimg2=loadImage("carro2.png")
  carimg3=loadImage("carro3.png")
  motoimg=loadImage("moto.png")
  pessoaimg1=loadImage("pessoa1.png")
  pessoaimg2=loadImage("pessoa2.png")
  pessoaimg3=loadImage("pessoa3.png")
  casaimg=loadImage("casa1.png")
  policiaimg1=loadImage("policial1.png")
  policiaimg2=loadImage("policial2.png")
  gameOverimg=loadImage("gameOver.png")
  florestaimg=loadImage("floresta.png")
  pedraimg=loadImage("pedra.png")
  arvoreimg=loadImage("arvore.png")
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;
 

 dog=createSprite(1400,645,50,50) 
 dog.addImage("inicio",doginicio)
 dog.scale=0.25
 dog.frameDelay=15

 dog.addImage("eat",dogeat)
 dog.addImage("obs",dogobs)
 dog.addImage("fim",dogfim)
 dog.addAnimation("correndo",dogrun)

 dog.changeImage("inicio")
}

function draw() {
  background("skyBlue")
background(florestaimg)  
movimento()
obstacles()

//coordenadas do mouse na tela 
textSize(40)
text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
drawSprites()
}

function obstacles(){
  if(frameCount%250===0){
    obstacle=createSprite(0,680,15,100)
    obstacle.velocityX=2
    obstacle.lifetime=width/obstacle.velocityX
    var sorteio=Math.round(random(1,2))
    switch (sorteio) {
      case 1:obstacle.addImage(pedraimg);
      obstacle.scale=0.3;  
        break;
      case 2:obstacle.addImage(arvoreimg);
      obstacle.scale=0.5;
      obstacle.y=620;
        break;
    }
  }
}

function movimento(){
  if(keyIsDown(UP_ARROW)&&this.dog.y>450){
    dog.y-=5
    dog.changeAnimation("correndo")
    dog.frameDelay=15
  }

  if(keyIsDown(DOWN_ARROW)&&this.dog.y<655){
    dog.y+=5
    dog.changeAnimation("correndo")
    dog.frameDelay=15
  }

  if(keyIsDown(LEFT_ARROW)){
    dog.x-=5
    dog.changeAnimation("correndo")
    dog.frameDelay=15
  }

  if(keyIsDown(RIGHT_ARROW)){
    dog.x+=5
    dog.changeAnimation("correndo")
    dog.frameDelay=15
  }
}