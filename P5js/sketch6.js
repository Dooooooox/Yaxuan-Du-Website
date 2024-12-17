let coffeeImg;
let waterIntake = [3, 5, 2, 4, 6, 7, 5]; 
let day = 0;
let waveHeight = 0;
let waveWidth = 0.05; 
let waveOffset = 0; 
let timePassed = 0; 
let smoothHeight = 0;
let baselineOffset = 0; 
let rotationAngle = 0; 
let bgColor; 
let targetColor; 
let currentColor;

function preload() {
  // 预加载图片
  coffeeImg = loadImage('../image/coffee.png');
}

function setup() {
  createCanvas(400, 600);
  frameRate(60); 
  textSize(16);
  textAlign(CENTER, CENTER);
  
  // initial color
  currentColor = color(100, 100, 255);
  targetColor = currentColor;
}

function draw() {
  // change color
  let waterAmount = waterIntake[day];
  if (waterAmount <= 3) {
  
    targetColor = color(247, 37, 86); 
  } else if (waterAmount <= 5) {
   
    targetColor = color(34, 255, 177); 
  } else {
  
    targetColor = color(250, 246, 0); 
  }
  

  currentColor = lerpColor(currentColor, targetColor, 0.05);
  background(currentColor); 
  

  waveHeight = map(waterIntake[day], 0, 10, 0, 800); 
  waveOffset -= 0.05;
  smoothHeight += (waveHeight - smoothHeight) * 0.05; 
  
  baselineOffset = sin(frameCount * 0.02) * 20; 


  drawWave(smoothHeight, 0);       
  drawWave(smoothHeight - 50, 1);  
  drawWave(smoothHeight - 100, 2);  
  

  if (smoothHeight > 0) {
    rotationAngle = map(smoothHeight, 0, 400, 0, HALF_PI); 
  }


  let originalCoffeeX = 100; 
  let originalCoffeeY = 150; 


  push(); 
  translate(originalCoffeeX, originalCoffeeY); 
  rotate(rotationAngle); 
  image(coffeeImg, -50, -30, 100, 60); 
  pop(); 


  let numberOfCups = waterIntake[day];

  if (numberOfCups >= 3 && numberOfCups <= 5) {
  //copy
    push();
    translate(originalCoffeeX + 50, originalCoffeeY - 40); 
    rotate(rotationAngle); 
    image(coffeeImg, -50, -30, 100, 60);
    pop();
  } else if (numberOfCups >= 6 && numberOfCups <= 9) {
    
    push();
    translate(originalCoffeeX + 50, originalCoffeeY - 40); // 右上方
    rotate(rotationAngle); 
    image(coffeeImg, -50, -30, 100, 60);
    pop();

    push();
    translate(originalCoffeeX - 50, originalCoffeeY - 40); // 左上方
    rotate(rotationAngle); 
    image(coffeeImg, -50, -30, 100, 60);
    pop();
  }

//text
  fill(0);
  noStroke();
  text("DAY" + (day + 1) , width / 2, 50);
  text("CUPS: " + waterIntake[day] , width / 2, height - 50);
  
  
  timePassed += deltaTime; 
  
  if (timePassed > 3000) { 
    day = (day + 1) % waterIntake.length;
    timePassed = 0; 
    smoothHeight = 0; 
  }
}


function drawWave(heightOffset, waveIndex) {
  stroke(0, 150, 255);
  strokeWeight(3);
  fill(2, 56, 255, 100); 
  
  beginShape();
  vertex(0, height); 

  for (let x = 0; x <= width; x++) {

    let y = height - heightOffset + baselineOffset + sin(x * waveWidth + waveOffset + waveIndex * 0.5) * 20;
    vertex(x, y);
  }

  vertex(width, height); 
  endShape(CLOSE);
}
