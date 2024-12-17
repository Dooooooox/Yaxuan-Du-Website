let startTime;
let duration = 8000; 

function setup() {
  createCanvas(600, 600);
  startTime = millis();  
}

function draw() {
  let elapsedTime = millis() - startTime; 
  let t = map(elapsedTime, 0, duration, PI, 0); 

  let radius = 200; 
  let centerX = width / 2; 
  let centerY = height / 2; 
  
  let c1 = color(255, 255, 153);  
  let c2 = color(255, 204, 0);    
  let c3 = color(255, 0, 0);      
  
  let colorTransition;
  if (elapsedTime < duration / 2) {
   
    colorTransition = lerpColor(c1, c2, map(elapsedTime, 0, duration / 2, 0, 1));
  } else {
   
    colorTransition = lerpColor(c2, c3, map(elapsedTime, duration / 2, duration, 0, 1));
  }

  
  let bgColor;
  if (elapsedTime < duration / 2) {
    // dark to light
    let bgBrightness = map(elapsedTime, 0, duration / 2, 50, 255); 
    bgColor = color(bgBrightness);
  } else {
    // light to dark
    let bgBrightness = map(elapsedTime, duration / 2, duration, 255, 150); 
    bgColor = color(bgBrightness);
  }
  
  background(bgColor);
  

  let x = centerX + radius * cos(t); 
  let y = centerY - radius * sin(t); 


  fill(colorTransition);
  ellipse(x, y, 80, 80);
  
  noStroke()

  fill(0,0,0)
  rect(470,100,200,500)
  rect(0,400,200)
  rect(145,340,20,40)
  
  beginShape()
  vertex(-20,400)
  vertex(220,400)
  vertex(100,330)
  endShape()
  
  fill(255,255,255)
  rect(120,520,45,100)
  
  let c = map(mouseX, 0, 600, 255, 0);//people

  fill(c);
  circle(mouseX, 500, 50);
  ellipse(mouseX,550,40,100)
  
 
  if (elapsedTime > duration) {
    startTime = millis(); 
  }
}
