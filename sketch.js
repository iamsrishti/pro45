var wallpaper;
var rocket; 
var rocketImage

function preload(){
wallpaper = loadImage("spacebackground.jpg")
rocketImage = loadImage("rocket-removebg-preview.png")
}



function setup(){
createCanvas(1000,600)
rocket = createSprite(70,300,10,15)
rocket.addImage("rocket",rocketImage)
rocket.scale = 0.25
}

function draw(){
background("black");
image(wallpaper,0,0,1300,600)

drawSprites()


}

