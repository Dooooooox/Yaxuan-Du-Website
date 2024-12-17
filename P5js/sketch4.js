function setup() {
    createCanvas(600, 400); 
  }
  
  function draw() {
    background(220);
    
    fill('purple');
    ellipse(400, 200, 120, 200); 
    
    fill('black');
    rect(370, 40, 60, 80); 
  
    fill(50, 50, 50);
    beginShape();
    vertex(370, 120); 
    vertex(340, 100);
    vertex(380, 110);
    vertex(360, 90);
    vertex(390, 110);
    vertex(370, 80);
    vertex(394, 110);
    vertex(400, 80);
    vertex(410, 110);
    vertex(440, 80);
    vertex(430, 110);
    vertex(460, 90);
    vertex(430, 120);
    endShape();
  
    push();
    noStroke();
    
    fill(150);
    arc(400, 160, 60, 40, TWO_PI, PI); 
  
    fill('white');
    ellipse(380, 140, 20, 10);
    ellipse(420, 140, 20, 10);
  
    rect(392, 160, 6, 10); 
    rect(402, 160, 6, 10); // 右边的白色长方形
  
    fill('black');
    rect(340, 200, 120, 100); // 胸部
    fill(220);
    ellipse(340, 250, 30, 100); // 左臂
    ellipse(460, 250, 30, 100); // 右臂
    pop();
  
    fill('black');
    rect(300, 300, 200, 80,50); // 身体
  
    // 调用自定义函数绘制八个轮子
    drawWheels(300, 370, 50, 8,100); // 调整位置和大小以适应长方形范围
  }
  
  // 用户定义函数：绘制轮子
  function drawWheels(startX, y, wheelSize, numWheels) {
    fill(50, 50, 50);
    let spacing = (250 - (numWheels * wheelSize)) / (numWheels - 1); // 计算轮子之间的间距
    
    for (let i = 0; i < numWheels; i++) {
      ellipse(startX + i * (wheelSize + spacing), y, wheelSize); // 根据轮子大小和间距绘制轮子
    }
  }
  