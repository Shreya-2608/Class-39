var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var Car1Img, Car2Img, Car3Img, Car4Img, Track;

function preload(){
  Car1Img = loadImage("images/car1.png");
  Car2Img = loadImage("images/car2.png");
  Car3Img = loadImage("images/car3.png");
  Car4Img = loadImage("images/car4.png");
  Track = loadImage("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
