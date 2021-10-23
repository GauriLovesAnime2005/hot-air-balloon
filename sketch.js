// create database and position variable here
var balloon,balloonImage1,balloonImage2;
var database,position,height;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(1200,600,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  var Airballoon=database.ref('balloon/position')
      Airballoon.on("value",readPosition , showError);

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);
  console.log(balloon.x+","+balloon.y)
  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(1,0);
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale*0.99;
    updateHeight(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0,+1);
    balloon.scale = balloon.scale*1.011;
  }

        drawSprites()
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y){
  database.ref('balloon/position').set({
    'x':height.x+x,
    'y':height.y+y
  })
}

function readPosition(data){
height = data.val()
balloon.x=height.x;
balloon.y=height.y;
}

function showError(){
  console.log("Error in writing to the database");
}
