let stage = 0;
let stageStartTime = 0;

function setup() {
  createCanvas(600, 600);
  noFill();
  strokeWeight(10);
  stageStartTime = millis(); 
}

function draw() {
  background('red');

  let numLogos = 7;
  let logoSpacing = width / (numLogos + 1);
  let maxRadius = 70;
  let time = frameCount * 0.02;

  if (stage === 0) {

    let centerX = width / 2;
    let centerY = height / 1.5;
    let largeRadius = 300;

    let animatedLargeRadius = largeRadius * (1 + 0.2 * sin(time));

    stroke(255, 204, 0);

    let leftX = centerX - animatedLargeRadius / 2;
    let rightX = centerX + animatedLargeRadius / 2;

    arc(leftX, centerY, animatedLargeRadius, animatedLargeRadius * 2, PI, TWO_PI);
    arc(rightX, centerY, animatedLargeRadius, animatedLargeRadius * 2, PI, TWO_PI);

    push()

    textSize(70); 
    textAlign(CENTER, CENTER); 
    text("C L I C K", width / 2, height - 70); 
    pop()
  } else if (stage === 1) {

    for (let i = 0; i < numLogos; i++) {
      for (let j = 0; j < numLogos; j++) {
        let x = (i + 1) * logoSpacing;
        let y = (j + 1) * logoSpacing;
        let delay = (numLogos - i - 1) * numLogos + (numLogos - j - 1);  

        if (frameCount - stageStartTime > delay * 5) { 
          let baseRadius = maxRadius;
          let animatedRadius = baseRadius * (1 + 0.2 * sin(time + i + j));

          stroke(255, 204, 0);

          arc(x - animatedRadius / 1.5, y, animatedRadius, animatedRadius * 2, PI, TWO_PI);
          arc(x + animatedRadius / 3, y, animatedRadius, animatedRadius * 2, PI, TWO_PI);
        }
      }
    }
  }
}

function mousePressed() {
  if (stage === 0) {
    stage = 1;
    stageStartTime = frameCount;  
  }
}
