let semiCircleColor;
let hairColor;
let scaleFactor;

function setup() {
  createCanvas(400, 400);
  
  semiCircleColor = color(100, 80, 200); // 初始颜色
  hairColor = color(145, 122, 191);      // 初始头发颜色
  background(255);
  noStroke();
  
  scaleFactor = 1;
}

function draw() {
  background(255); 
  
  scaleFactor = map(mouseX, 0, width, 0.1, 5);
  translate(width / 2, height / 2);
  scale(scaleFactor);
  translate(-200, -200);  
  
  //ear
  fill(249, 200, 200);
  ellipse(140, 180, 40, 60);    
  ellipse(260, 180, 40, 60);    
  
  //throat
  rect(180, 260, 40, 40);
  
  // Face
  fill(255, 230, 230);
  ellipse(200, 200, 140);  // Face shape
  rect(130, 130, 140, 70);
  
  // hair
  fill(hairColor);
  ellipse(155, 120, 80);    
  ellipse(215, 105, 65);    
  ellipse(260, 130, 50);    
  
  // Eyes
  fill(30, 20, 50);
  ellipse(170, 180, 20);    
  ellipse(230, 180, 20);   

  // Eyebrows
  stroke(30, 20, 50);
  strokeWeight(4);
  line(160, 165, 180, 165);   
  line(220, 165, 240, 165);     

  // Nose
  stroke(255, 130, 130);
  strokeWeight(6);
  line(200, 190, 200, 220);    
  line(200, 220, 185, 220);    
  
  // Collar
  fill(240, 150, 160);
  noStroke();
  
  // Mouth
  arc(200, 230, 70, 50, 0, PI); 

  // cloth
  fill(semiCircleColor);
  arc(200, 340, 150, 120, PI, TWO_PI); 
}

function mousePressed() {
  semiCircleColor = color(random(255), random(255), random(255));
  hairColor = color(random(255), random(255), random(255));
}
