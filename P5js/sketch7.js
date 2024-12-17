let game =1;

let img2_by1, studentImgBy1, soundBy1;
let studentXBy1 = 0; // 学生起点 X 坐标
let studentYBy1 = 315; // 学生起点 Y 坐标
let studentSpeedBy1 = 2; // 学生的平滑移动速度
let studentSizeBy1 = 48; // 学生的大小 (修改大小)
let startButtonBy1, nextButtonBy1, restartButtonBy1; // 声明按钮
let gameStartedBy1 = false; // 游戏开始标志
let gameEndedBy1 = false; // 游戏结束标志
let sceneBy1 = 1; // 控制当前场景，1为第一关，2为第二关
// 重置学生的位置

//////////////2
let platformHeight222 = 350;
let platformWidth222 = 100;
let coyoteSpace = 10;

let playerBallY222 = 200;
let playerBallX222 = 300;
let playerSpeedY222 = 2;
let playerSpeedX222 = 0;

let computerBalls222 = [
  { y: 200, x: 100, speedY: 2, speedX: 0 },
];

let playerLives222 = 5;
let computerLives2 = 5;

let blockWidth2 = 60;
let blockHeight2 = 15;
let rows2 = 4;
let columns2 = 9;

let resetCounter2 = rows2 * columns2;
let playerPoints2 = 0;
let computerPoints2 = 0;
let multiplier2 = 1;
let gameOver2 = false;

let startButton2;  // Start Game Button
let gameStarted2 = false;  // Game Start flag
// Create blocks
let blockIndex2 = 0;
let blocks2 = [];




////////////////////////////////////////3
let bg_img3 = null;
let hero_img3 = null;

let bg_x3 = 0;
let bg_y3 = 0;

let bg2_x3 = 0;

let size1_3 = 0;
let size2_3 = 0;
let size3_3 = 0;
let size4_3 = 0;

let timer3 = 0;
let pipes3 = [];

let color_13 = null;
let color_23 = null;
let bg3 = null;

let color_3 = 100;

var game_running = true;
let SPEED3 = 5;
let DEBUG3 = false;

var click_count3 = 0;
let bg_music3 = null;





function resetPosition() {
  studentXBy1 = 0; // 学生的起始 X 坐标
  studentYBy1 = 315; // 学生的起始 Y 坐标
}



function preload() {
  // 加载图片
  img2_by1 = loadImage('../image/room.png');
  studentImgBy1 = loadImage('../image/学生.png');
  soundBy1 = loadSound('../image/第一关.mp3'); // 加载 MP3 文件

  bg_img3 = loadImage('../image/bg.jpeg');
  hero_img3 = loadImage('../image/hero.png');
  bg_music3 = loadSound('../image/bb.mp3');
}

function setup() {
  game=1;
  createCanvas(800,432);
  background(255);

  init1();

}

function init1(){
  imageMode(CORNER);
  // 创建“开始游戏”按钮
  startButtonBy1 = createButton('START');
  startButtonBy1.position(width / 2 - 150, height / 2);
  startButtonBy1.size(100, 50);
  startButtonBy1.mousePressed(startGame); // 按钮点击后调用 startGame 函数
}

function init2(){
  game=2;
  soundBy1.stop();

  startButton2 = createButton('START');
  startButton2.position(width / 2 - 60, height / 2);  // Set button position
  startButton2.size(120, 40);  // Set button size
  startButton2.style('font-size', '20px');  // Set font size
  startButton2.mousePressed(startGame22);  // Set button click event

  for (let i = 0; i < columns2; i++) {
    let x = 14 + (4 + blockWidth2) * i;
    for (let j = 0; j < rows2; j++) {
      let y = 70 + (blockHeight2 + 10) * j;
      blocks2[blockIndex2] = new Block2222(x, y, blockWidth2, blockHeight2);
      blockIndex2++;
    }
  }
}
function game1(){
  if (sceneBy1 === 1) {
    // 如果是在场景 1
    background(255);
    image(img2_by1, 0, 0,600,400); // 显示“教室”图片
    fill(0);
    strokeWeight(0.5);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('Welcome to become Chinese Student!', 800 / 2-100, 432 / 2 - 30);

    // 显示“START”按钮
    startButtonBy1.show();
  } else if (sceneBy1 === 2) {
    // 如果是在场景 2（游戏开始并通关后）
    if (gameStartedBy1 && !gameEndedBy1) {
      // 游戏开始后，按钮消失
      startButtonBy1.hide();



      image(img2_by1, 0, 0, 600, 400); // 显示“教室”图片
      fill(0, 0, 0, 127);
      rect(0, 0, 600, 400);

      // 绘制线条
      push()
      stroke(255, 255, 255);
      strokeWeight(25);
      noFill();
      beginShape();
      vertex(0, 315);
      vertex(45, 315);
      vertex(45, 45);
      vertex(110, 45);
      vertex(110, 95);
      vertex(200, 95);
      vertex(200, 160);
      vertex(110, 160);
      vertex(200, 315);
      vertex(125, 315);
      vertex(125, 365);
      vertex(315, 365);
      vertex(245, 225);
      vertex(335, 225);
      vertex(335, 140);
      vertex(275, 140);
      vertex(275, 45);
      vertex(440, 45);
      vertex(440, 255);
      vertex(335, 255);
      vertex(385, 365);
      vertex(495, 365);
      vertex(495, 45);
      vertex(555, 115);
      vertex(555, 200);
      vertex(600, 200);
      endShape();
      pop()

      // 绘制学生（放大）
      image(studentImgBy1, studentXBy1 - studentSizeBy1 / 2, studentYBy1 - studentSizeBy1 / 2, studentSizeBy1, studentSizeBy1); // 学生图片大小改为 studentSizeBy1 x studentSizeBy1

      // 检查是否在有效范围内
      if (!isOnPath(studentXBy1, studentYBy1)) {
        resetPosition(); // 重置位置
      }

      // 平滑控制学生移动
      if (keyIsDown(UP_ARROW)) {
        studentYBy1 -= studentSpeedBy1;
      }
      if (keyIsDown(DOWN_ARROW)) {
        studentYBy1 += studentSpeedBy1;
      }
      if (keyIsDown(LEFT_ARROW)) {
        studentXBy1 -= studentSpeedBy1;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        studentXBy1 += studentSpeedBy1;
      }

      // 检查是否到达终点
      if (dist(studentXBy1, studentYBy1, 600, 200) < 10) {
        gameEndedBy1 = true; // 游戏结束
        game=2;
        soundBy1.stop();

        startButton2 = createButton('START');
        startButton2.position(width / 2 - 60, height / 2);  // Set button position
        startButton2.size(120, 40);  // Set button size
        startButton2.style('font-size', '20px');  // Set font size
        startButton2.mousePressed(startGame22);  // Set button click event

        for (let i = 0; i < columns2; i++) {
          let x = 14 + (4 + blockWidth2) * i;
          for (let j = 0; j < rows2; j++) {
            let y = 70 + (blockHeight2 + 10) * j;
            blocks2[blockIndex2] = new Block2222(x, y, blockWidth2, blockHeight2);
            blockIndex2++;
          }
        }
      }
    }
  }
}
function  game4(){

    background(30); // 背景颜色为深灰色

    textAlign(CENTER, CENTER); // 文本对齐方式居中
    fill(255); // 设置文本颜色为白色

    // 显示大标题
    textSize(48); // 设置大字体大小
    text("Game Over", width / 2, height / 2 - 30); // 大标题位置稍微上移

    // 显示小提示文字
    textSize(16); // 设置小字体大小
    text("Click anywhere to restart", width / 2, height / 2 + 30); // 小提示文字位置稍微下移

}
function   game2(){
  background(0);
  if (game === 2) {  // 如果是游戏结束场景
    //   if (!gameStarted2) {
    //     // If the game hasn't started, display "Start Game" button and instructions
    //     fill(255);
    //     textAlign(CENTER, CENTER);
    //     textSize(30);
    //     text("Click to Game2", width / 2, height / 2 - 40);
    //   } else {
    //
    //
    //
    //     // If the game has started, begin the game logic
    //     // Display scores and lives
    //     textAlign(RIGHT, TOP);
    //     fill(255);
    //     noStroke();
    //     textSize(15);
    //     text("玩家得分: " + playerPoints2, 595, 5);
    //     text("玩家生命: " + playerLives222, 595, 20);
    //     text("电脑得分: " + computerPoints2, 595, 35);
    //     text("电脑生命: " + computerLives2, 595, 50);
    //
    //     // Handle player ball movement
    //     handleBallMovement222("player");
    //
    //     // Handle computer ball movements
    //     for (let i = 0; i < computerBalls222.length; i++) {
    //       handleBallMovement222("computer", i);
    //     }
    //
    //     // Draw blocks
    //     for (let i = 0; i < rows2 * columns2; i++) {
    //       blocks2[i].drawBlock();
    //     }
    //
    //     // Check if all blocks are cleared
    //     // if (resetCounter2 < 1) {
    //     //   gameOver2 = true;
    //     // }
    //   }
    //
    //   // if (gameOver2) {
    //   //   // Display final score and winner
    //   //   textAlign(CENTER, CENTER);
    //   //   fill(255);
    //   //   noStroke();
    //   //   textSize(50);
    //   //   if (playerPoints2 > computerPoints2) {
    //   //     text("You Win!", width / 2, height / 2);
    //   //   } else if (computerPoints2 > playerPoints2) {
    //   //     text("You Lose!", width / 2, height / 2);
    //   //   } else {
    //   //     text("It's a Tie!", width / 2, height / 2);
    //   //   }
    //   //
    //   //   // Display click to restart message
    //   //   textSize(20);
    //   //   text("Click to continue", width / 2, height / 2 + 40);
    //   //
    //   //   if (mouseIsPressed) {
    //   //     game = 3;  // 点击后跳转到场景3
    //   //   }
    //   // }
    // }else if (game === 3) {  // 场景3（黑屏）
    //   background(0);  // 黑屏
    // }

    if (!gameStarted2) {
      // If the game hasn't started, display "Start Game" button and instructions
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(30);
      text("Click to Game2", width / 2, height / 2 - 40);
    } else {



      // If the game has started, begin the game logic
      // Display scores and lives
      textAlign(RIGHT, TOP);
      fill(255);
      noStroke();
      textSize(15);
      text("玩家得分: " + playerPoints2, 595, 5);
      text("玩家生命: " + playerLives222, 595, 20);
      text("电脑得分: " + computerPoints2, 595, 35);
      text("电脑生命: " + computerLives2, 595, 50);

      // Handle player ball movement
      handleBallMovement222("player");

      // Handle computer ball movements
      for (let i = 0; i < computerBalls222.length; i++) {
        handleBallMovement222("computer", i);
      }

      // Draw blocks
      for (let i = 0; i < rows2 * columns2; i++) {
        blocks2[i].drawBlock();
      }

      // Check if all blocks are cleared
      if (resetCounter2 < 1) {
        gameOver2 = true;
      }
    }

    if (gameOver2) {
      // Display final score and winner
      textAlign(CENTER, CENTER);
      fill(255);
      noStroke();
      textSize(50);
      if (playerPoints2 > computerPoints2) {
        text("You Win!", width / 2, height / 2);
        init3();
        bg_music3.play();
        game = 3;
      } else if (computerPoints2 > playerPoints2) {
        text("You Lose!", width / 2, height / 2);
        init3();
        bg_music3.play();
        game = 3;
      } else {
        text("It's a Tie!", width / 2, height / 2);

      }

      // Display click to restart message
      textSize(20);
      text("Click to continue", width / 2, height / 2 + 40);

      if (mouseIsPressed) {
        game = 3;  // 点击后跳转到场景3
      }
    }
  }else if (game === 3) {  // 场景3（黑屏）
    background(0);  // 黑屏
  }
    if (playerLives222 < 0) {
      init3();
      bg_music3.play();
      game = 3;

    }

}
function draw() {
    if(game==1){
      game1();
    }

  if(game==2){
    startButtonBy1.hide();
    game2();
  }


  if(game==3){
    startButton2.hide();
    rectMode(CORNER);

    game3();
  }

  if(game==4){
    bg_music3.stop();


    game4();
  }

}


function keyPressed(){
  if(key == ' '){
    if(game<=3){
      game+=1;
    }



    if(game==2){
      soundBy1.stop();
      startButton2 = createButton('START');
      startButton2.position(width / 2 - 60, height / 2);  // Set button position
      startButton2.size(120, 40);  // Set button size
      startButton2.style('font-size', '20px');  // Set font size
      startButton2.mousePressed(startGame22);  // Set button click event

      for (let i = 0; i < columns2; i++) {
        let x = 14 + (4 + blockWidth2) * i;
        for (let j = 0; j < rows2; j++) {
          let y = 70 + (blockHeight2 + 10) * j;
          blocks2[blockIndex2] = new Block2222(x, y, blockWidth2, blockHeight2);
          blockIndex2++;
        }
      }

    }

    if(game==3){
      init3();
    }
  }


}
// 游戏开始函数
function startGame() {
  soundBy1.play(); // 播放音频
  gameStartedBy1 = true; // 设置游戏开始标志
  sceneBy1 = 2; // 进入游戏场景 2
  startButtonBy1.hide(); // 隐藏开始按钮
}





// 重新开始游戏
function restartGameBy1() {
  // 重置所有游戏状态
  gameStartedBy1 = false;
  gameEndedBy1 = false;
  sceneBy1 = 1; // 回到初始场景
  studentXBy1 = 0;
  studentYBy1 = 315;
  studentSpeedBy1 = 2;
  studentSizeBy1 = 48;

  // 隐藏“下一关”和“重新游戏”按钮
  nextButtonBy1.hide();
  restartButtonBy1.hide();

  // 显示开始游戏按钮
  startButtonBy1.show();
}

// 检查是否在线条范围内
function isOnPath(x, y) {
  let d = 25 / 2; // 线条的半径为线条宽度的一半
  let pathPoints = [
    { x: 0, y: 315 }, { x: 45, y: 315 }, { x: 45, y: 45 }, { x: 110, y: 45 },
    { x: 110, y: 95 }, { x: 200, y: 95 }, { x: 200, y: 160 }, { x: 110, y: 160 },
    { x: 200, y: 315 }, { x: 125, y: 315 }, { x: 125, y: 365 }, { x: 315, y: 365 },
    { x: 245, y: 225 }, { x: 335, y: 225 }, { x: 335, y: 140 }, { x: 275, y: 140 },
    { x: 275, y: 45 }, { x: 440, y: 45 }, { x: 440, y: 255 }, { x: 335, y: 255 },
    { x: 385, y: 365 }, { x: 495, y: 365 }, { x: 495, y: 45 }, { x: 555, y: 115 },
    { x: 555, y: 200 }, { x: 600, y: 200 }
  ];
  
  for (let i = 1; i < pathPoints.length; i++) {
    let p1 = pathPoints[i - 1];
    let p2 = pathPoints[i];
    let distToSegment = distToLineSegment(x, y, p1.x, p1.y, p2.x, p2.y);
    if (distToSegment < d) return true;
  }
  
  return false;
}

// 计算点到线段的距离
function distToLineSegment(px, py, x1, y1, x2, y2) {
  let A = px - x1;
  let B = py - y1;
  let C = x2 - x1;
  let D = y2 - y1;
  let dot = A * C + B * D;
  let len_sq = C * C + D * D;
  let param = (len_sq != 0) ? dot / len_sq : -1;
  let xx, yy;

  if (param < 0) {
    xx = x1;
    yy = y1;
  } else if (param > 1) {
    xx = x2;
    yy = y2;
  } else {
    xx = x1 + param * C;
    yy = y1 + param * D;
  }

  return dist(px, py, xx, yy);
}
//////////////2
function startGame22() {
  startButton2.hide();  // 隐藏按钮
  gameStarted2 = true;  // 设置游戏开始
  game = 2;  // 进入游戏场景
}
function handleBallMovement222(player, index = 0) {
  let ballY, ballX, speedY, speedX, lives, points;
  let platformX;

  if (player === "player") {
    ballY = playerBallY222;
    ballX = playerBallX222;
    speedY = playerSpeedY222;
    speedX = playerSpeedX222;
    lives = playerLives222;
    points = playerPoints2;
    platformX = mouseX;
  } else {
    let computerBall = computerBalls222[index];
    ballY = computerBall.y;
    ballX = computerBall.x;
    speedY = computerBall.speedY;
    speedX = computerBall.speedX;
    lives = computerLives2;
    points = computerPoints2;
    platformX = constrain(ballX + 10, platformWidth222 / 2, width - platformWidth222 / 2); // Adjust platform position for computer ball
  }

  // Ball movement and collision with top
  if (ballY < 0) {
    speedY = 5;
  } else if (ballY > platformHeight222 - 10) {
    if (ballX > platformX - (platformWidth222 / 2 + coyoteSpace) &&
        ballX < platformX + (platformWidth222 / 2 + coyoteSpace)) {
      speedY = -5;
      speedX = floor(map(ballX, platformX - (platformWidth222 / 2 + coyoteSpace), platformX + (platformWidth222 / 2 + coyoteSpace), -5, 5));
      multiplier2 = 1;
    } else {
      lives--;
      ballY = 200;
      ballX = player === "player" ? 300 : 100 + index * 20;
      speedX = 0;
      speedY = 2;
    }
  }

  // Wall collision
  if (ballX < 0 || ballX > width - 1) {
    speedX = -speedX;
  }

  // Update ball position
  ballY += speedY;
  ballX += speedX;

  // Draw the ball and platform
  circle(ballX, ballY, 10);
  rectMode(CENTER);
  rect(platformX, platformHeight222, platformWidth222, 10, 10);

  // Check block collision and score update
  if (ballY < 170) {
    for (let i = 0; i < rows2 * columns2; i++) {
      if (blocks2[i].collisionCheck(ballX, ballY)) {
        speedY = -speedY;
        resetCounter2--;
        points += floor(10 * multiplier2);
        multiplier2 += 0.25;
      }
    }
  }

  // Update player or computer variables
  if (player === "player") {
    playerBallY222 = ballY;
    playerBallX222 = ballX;
    playerSpeedY222 = speedY;
    playerSpeedX222 = speedX;
    playerLives222 = lives;
    playerPoints2 = points;
  } else {
    computerBalls222[index].y = ballY;
    computerBalls222[index].x = ballX;
    computerBalls222[index].speedY = speedY;
    computerBalls222[index].speedX = speedX;
    computerLives2 = lives;
    computerPoints2 = points;
  }
}
// function reset() {
//   for (let i = 0; i < blocks.length; i++) {
//     blocks[i].broken = false;
//   }
//   playerBallY222 = 200;
//   playerBallX222 = 300;
//   playerSpeedX222 = random([-2, 2]); // Random horizontal speed for the ball
//   playerSpeedY222 = 2;
//   for (let i = 0; i < computerBalls222.length; i++) {
//     computerBalls222[i].y = 200;
//     computerBalls222[i].x = 100 + i * 20;
//     computerBalls222[i].speedX = random([-2, 2]); // Random horizontal speed
//     computerBalls222[i].speedY = 2;
//   }
//   resetCounter = rows * columns;
//   playerPoints = 0;
//   computerPoints = 0;
//   gameOver = false;
// }

class Block2222 {
  constructor(x, y, blockWidth, blockHeight) {
    this.x = x;
    this.y = y;
    this.blockWidth = blockWidth;
    this.blockHeight = blockHeight;
    this.broken = false;
  }

  drawBlock() {
    fill(0);
    stroke(255);
    if (this.broken == false) {
      rectMode(CORNER);
      rect(this.x, this.y, this.blockWidth, this.blockHeight);
    }
  }

  collisionCheck(ballX, ballY) {
    if (this.broken == false) {
      if (ballX > this.x && ballX < this.x + this.blockWidth + 5 &&
          ballY > this.y && ballY < this.y + this.blockHeight + 5) {
        this.broken = true;
        return true;
      }
    }
    return false;
  }
}


/////////3




class Bird3 {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.ay = 0;
    this.gravity = 0.3;
    this.isUping = false;

    this.angle = 10;





    this.rectWidth = 50;
    this.rectHeight = 20;
  }

  draw(){
    push();

    translate(this.x,this.y);
    rotate(this.angle);

    this.angle += 2;

    if(this.isUping == true){
      this.angle -= 4;
    }
    this.y -= this.ay;
    this.ay -= this.gravity;
    image(hero_img3,0,0,80,80);

    //碰撞箱
    // noFill();
    // strokeWeight(2);
    // rect(0,0,this.rectWidth,this.rectHeight);
    pop();

    //碰撞箱
    //noFill();
    // if(DEBUG3 == true){
    //   fill('white')
    //   strokeWeight(2);
    //   let rc = this.getRect();
    //   rect(rc[0]+this.rectWidth/4,rc[1]+this.rectHeight,rc[2],rc[3]);
    // }

  }

  reset(){
    this.y = height/2;
    this.ay = 0 ;
    this.gravity = 0.3;
    this.angle = 10;
    this.isUping = false;
  }


  getRect(){
    // [1,2,100,200]

    return [(this.x-this.rectWidth/4) ,
      (this.y-this.rectHeight),
      this.rectWidth/2,
      this.rectHeight];
  }
}

class Bg3 {
  constructor(x,y,x2,img){
    this.bg_x = x;
    this.bg_y = y;
    this.bg2_x = x2;
    this.bg_img = img;

    this.score = 0;
    this.add_score = 10;
    this.add_far_score = 10;
    this.timer = 0;

    this.isEnd = false;
    this.farthest = 0;
  }

  draw(){
    image(this.bg_img,this.bg_x,this.bg_y);
    image(this.bg_img,this.bg2_x,this.bg_y);

    this.bg_x -= SPEED3;
    this.bg2_x -= SPEED3;

    if(this.bg_x + width/2 <= 0){
      this.bg_x = width + width/2;
    }

    if(this.bg2_x + width/2 <= 0){
      this.bg2_x = width + width/2;
    }
  }

  drawScore(){
    push();

    this.timer += deltaTime/1000.;

    stroke('black');
    strokeWeight(6);
    textSize(35);
    fill('white');
    text('distance: '+this.score+' m',250,50);
    fill('yellow');
    text('farthest: '+this.farthest+' m',250,100);

    fill('white');
    textSize(50);
    text('Superman',650,60);




    if(this.timer >= 1){
      this.score += this.add_score;
      this.farthest += this.add_far_score;
      this.timer = 0;
    }
    pop();
  }

  end(){

    textSize(50);
    stroke('black');
    strokeWeight(5);
    fill('yellow');
    text('YOU FALL !',width/2+100,height/2);

    textSize(20);
    stroke('black');
    strokeWeight(3);
    color_3+=10;
    fill(color_3,color_3,color_3);
    if(this.score >= this.farthest){
      this.farthest = this.score;
      text('Congratulations! new record: '+this.farthest,width/2+100,height/2+40);
    }else{
      text('Hightest record: '+this.farthest,width/2+100,height/2+40);
    }


    textSize(25);
    fill(color_13);
    rect(width/2-70,height/2+90,100,50);
    text('Retry',width/2+0,height/2+100);

    textSize(25);
    fill(color_23);
    rect(width/2+130,height/2+90,100,50);
    text('Menu',width/2+200,height/2+100);

    // 按键黄色高亮
    // retry
    if(mouseX >= width/2-70 -50
        && mouseX <= width/2-70 +50
        && mouseY >= height/2+90 -25
        && mouseY <= height/2+90 +25){
      color_13 = 'yellow';
    }else{
      color_13 = 'white';
    }
    //menu
    if(mouseX >= width/2+130 -50
        && mouseX <= width/2+130 +50
        && mouseY >= height/2+90 -25
        && mouseY <= height/2+90 +25){
      color_23 = 'yellow';
    }else{
      color_23 = 'white';
    }
    if(mouseX >= width/2-70 -50
        && mouseX <= width/2-70 +50
        && mouseY >= height/2+90 -25
        && mouseY <= height/2+90 +25){
      color_13 = 'yellow';
    }else{
      color_13 = 'white';
    }


    //计分
    this.add_score = 0;
    this.add_far_score = 0;
    if(this.score >= this.farthest){
      this.farthest = this.score;
    }
  }



  isPtInRect(pt,rc){
    // pt:[x,y]
    // rc:[x,y,w,h]
    // return:  true / false
    if( pt[0] >= rc[0] && pt[0] <= rc[0] + rc[2] &&
        pt[1] >= rc[1] && pt[1] <= rc[1] + rc[3]
    ){
      return true;
    }
    return false;
  }


  isRcInteract(rc1,rc2){
    let p1 = [rc1[0],rc1[1]];
    let p2 = [rc1[0]+rc1[2],rc1[1]];
    let p3 = [rc1[0]+rc1[2],rc1[1]+rc1[3]];
    let p4 = [rc1[0],rc1[1]+rc1[3]];

    if( this.isPtInRect(p1,rc2) ||
        this.isPtInRect(p2,rc2) ||
        this.isPtInRect(p3,rc2) ||
        this.isPtInRect(p4,rc2)
    ){
      //noLoop();
      return true;
    }
    return false;

  }
}

function resetx3(){
  // 积分
  // 管子清除
  // bird 初始位置
  // 清除提示信息
  // 恢复运行

  // console.log("resetx");
  bird.reset();

  bg3.isEnd = false;
  pipes3 = [];
  bg3.score = 0;
  bg3.add_score = 10;
  bg3.timer = 0;
}

class Pipe3 {
  // constructor(x,y,size1_3,size2_3,size3,size4_3){
  // 	this.x = x;
  // 	this.y = y;
  // 	this.rectWidth1 = size1_3;
  // 	this.rectHeight1 = size2_3;
  // }

  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

  }

  draw(){
    push();
    stroke('black');
    strokeWeight(3);
    fill('greenyellow');
    rectMode(CORNER);
    rect(this.x,this.y,this.w,this.h);
    // rect(this.x,this.y-height/2,this.rectWidth,this.rectHeight);
    //rect(this.x,this.y+height/2,this.rectWidth,this.rectHeight);

    if(DEBUG3 == true){
      fill('white')
      rect(this.x,this.y,this.w,this.h);
    }
    pop();


    fill('white')
    strokeWeight(2);
    // let rc = this.getRect();
    // rect(rc[0]+this.rectWidth/2,rc[1]+this.rectHeight,rc[2],rc[3]);


    this.x-=SPEED3;
    // if(this.x <= -50){
    // 	this.x = width + 50;
    // 	this.width1 = random(200,350);
    // 	this.height1 = random(20,30);
    // 	this.width2 = random(200,350);
    // 	this.height2 = random(20,30);
    // }
  }

  getRect(){
    // [1,2,100,200]
    let shrink = 10;
    return [this.x +shrink , this.y+shrink,
      this.w-shrink*2,this.h-shrink*2];

  }
}




function init3(){


  rectMode(CENTER);

  imageMode(CENTER);

  angleMode(DEGREES);

  //bg_music.playMode('sustain');

  bg_x3 = width/2;
  bg_y3 = height/2;

  bg2_x3 = width/2 + width;

  bg3 = new Bg3(bg_x3,bg_y3,bg2_x3,bg_img3);


  size1_3 = random(200,350);
  size2_3 = random(20,30);
  size3_3 = random(200,350);
  size4_3 = random(20,30);

  // pipe = new Pipe(width + width/2,height/2,size1_3,size2_3);

  bird = new Bird3(width/4,height/2);

  color_13 = 'white';
  color_23 = 'white';



  click_count3 = 0;
}

function music_play3(){
  bg_music3.setLoop(true);
  bg_music3.play();
}


function game3(){


  background('black');

  bg3.draw();

  //ellipse(bird.x,bird.y,30,30);
  bird.draw();
  timer3+=deltaTime/1000.;
  if(timer3>=random(1,2)){

    // pipe 1
    let x = width + width/2;
    let y = 0 ;
    let w = 30;
    let h = 20;
    h = random(100,height/3*2);

    if ( int(random(10)) %2 == 0){
      y = 0;
    }else{
      y = height - h ;
    }

    let pipe = new Pipe3(x,y,w,h)
    pipes3.push(pipe);

    //
    if (int (random(10))%2 == 0){
      if(y==0){
        h = random(30,height-h - random(60,80));
        y = height -h;
      }else{
        y = 0 ;
        h = random(30,height-h - random(60,80));
      }
      let pipe = new Pipe3(x,y,w,h)
      pipes3.push(pipe);
    }
    timer3 = 0;
  }

  for(let i = 0; i<pipes3.length; i++){
    let pipe = pipes3[i];
    pipe.draw();
  }

  if(mouseIsPressed){
    bird.ay += 0.6;
    bird.isUping = true;
  }else{
    bird.isUping = false;
  }

  if(bird.y >= height && bird.y <= height+30){
    // noLoop();
    bird.gravity = 5;
    bg3.isEnd = true;

  }

  if(bird.y <= -20){
    bird.gravity = 5;
    bg3.isEnd = true;
  }

  push();


  bg3.drawScore();
  pop();



  if(bg3.isEnd == true){
    bg3.end();
  }



  let rcBird = bird.getRect();
  for(let i = 0; i<pipes3.length; i++){
    let pipe = pipes3[i];
    let rcPipe = pipe.getRect();
    if (bg3.isRcInteract(rcBird,rcPipe)){
      bg3.isEnd = true;
      bird.gravity = 5;
    }
  }

}

function mousePressed(){
  if(game==3){
    if(bg3.isEnd == true){
      if(mouseX >= width/2-70 -50
          && mouseX <= width/2-70 +50
          && mouseY >= height/2+90 -25
          && mouseY <= height/2+90 +25){
        resetx3();

      }

      if(mouseX >= width/2+130 -50
          && mouseX <= width/2+130 +50
          && mouseY >= height/2+90 -25
          && mouseY <= height/2+90 +25){
        bg_music3.stop();
        game=4;
      }




    }

    if( click_count3 == 0){
      music_play3();
    }
    click_count3++;
  }

  if(game==4){
     studentXBy1 = 0; // 学生起点 X 坐标
     studentYBy1 = 315; // 学生起点 Y 坐标
     studentSpeedBy1 = 2; // 学生的平滑移动速度
     studentSizeBy1 = 48; // 学生的大小 (修改大小)
     startButtonBy1, nextButtonBy1, restartButtonBy1; // 声明按钮
     gameStartedBy1 = false; // 游戏开始标志
     gameEndedBy1 = false; // 游戏结束标志
     sceneBy1 = 1; // 控制当前场景，1为第一关，2为第二关
    init1();

  ////2
     platformHeight222 = 350;
     platformWidth222 = 100;
     coyoteSpace = 10;

     playerBallY222 = 200;
     playerBallX222 = 300;
     playerSpeedY222 = 2;
     playerSpeedX222 = 0;

     computerBalls222 = [
      { y: 200, x: 100, speedY: 2, speedX: 0 },
    ];

     playerLives222 = 5;
     computerLives2 = 5;

     blockWidth2 = 60;
     blockHeight2 = 15;
     rows2 = 4;
     columns2 = 9;

     resetCounter2 = rows2 * columns2;
     playerPoints2 = 0;
     computerPoints2 = 0;
     multiplier2 = 1;
     gameOver2 = false;

     startButton2;  // Start Game Button
     gameStarted2 = false;  // Game Start flag
// Create blocks
     blockIndex2 = 0;
     blocks2 = [];
//3

     bg_x3 = 0;
     bg_y3 = 0;

     bg2_x3 = 0;

     size1_3 = 0;
     size2_3 = 0;
     size3_3 = 0;
     size4_3 = 0;

     timer3 = 0;
     pipes3 = [];

     color_13 = null;
     color_23 = null;
     color_3 = 100;

     game_running = true;
     SPEED3 = 5;
     DEBUG3 = false;

     click_count3 = 0;


    game=1;
  }

}


