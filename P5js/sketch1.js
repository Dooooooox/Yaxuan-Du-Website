function setup() {
  createCanvas(400, 400);


  background('white');
   
  let c1 = color(0, 0, 0);
  
  fill(c1);
  noStroke();
  
  ellipse(100, 200, 80,330);
  
   let c3 = color(255,0, 0);
  fill(c3)
  rect(60, 80, 20,50)
  rect(60, 270, 20,50) 
  rect(120, 80, 20,50)
  rect(120, 270, 20,50)
  rect(260, 80, 20,50)
  rect(260, 270, 20,50) 
  rect(320, 80, 20,50)
  rect(320, 270, 20,50)
 
  let c2 = color(0,0, 0);
 
  fill(c2)
  ellipse(300, 200, 80,330);
  
  push() //dragon
  
  noStroke();
  scale(0.25)//downsize
  translate(150,500)
 
 noStroke();

  fill(255)
  strokeWeight(2);
  
  bezier(105,221,90,190,120,200,140,211);

  beginShape();//front of mouse
  vertex(105, 220);
  vertex(140, 210);
  vertex(125, 235);
  vertex(115, 270);
  vertex(105, 220);
  vertex(100,240);
  vertex(115, 270);
  endShape(CLOSE);
  
  beginShape();//top of mouse
  vertex(124,235)
  vertex(150,260);
  vertex(160,240);
  vertex(170,255);
  vertex(180,240);
  vertex(190,250);
  vertex(220,235);
  vertex(220,220);
  vertex(190,220);
  vertex(139,210);
  endShape(CLOSE)
  
  bezier(128,250,130,280,150,300,170,300)  //lower jaw
  
  beginShape();//down of mouse
  vertex(128,250)
  vertex(150,270);
  vertex(160,255);
  vertex(173,270);
  vertex(180,260);
  vertex(200,265);
  vertex(215,250)
  vertex(220,235)
  vertex(220,280)
  vertex(200,300)
  vertex(185,295)
  vertex(169,300)
  endShape(CLOSE)
  
  
  
  bezier(160,220,175,200,195,190,220,198)  //upper part of the eye
  beginShape()//eyes
  vertex(159,219)
  vertex(219,198)
  vertex(225,205)
  vertex(160,225)
  endShape(CLOSE)
  beginShape()//eyes
  vertex(224,205)
  vertex(220,220)
  vertex(205,220)
  vertex(219,205)
  endShape(CLOSE)
  
  bezier(215,205,215,190,230,160,270,130)
  
  beginShape()
  vertex(195,205)
  vertex(225,180)
  vertex(250,150)
  vertex(230,200)
  vertex(240,200)
  vertex(260,160)
  vertex(280,150)
  vertex(265,170)
  vertex(257,200)
  vertex(280,170)
  vertex(310,165)
  vertex(283,180)
  vertex(275,200)
  vertex(250,280)
  vertex(220,280)
  vertex(220,230)
  endShape(CLOSE)
  
  beginShape()
  vertex(240,230)
  vertex(290,233)
  vertex(320,210)
  endShape(CLOSE)  
  
  beginShape()
  vertex(260,230)
  vertex(300,250)
  vertex(340,297)
  vertex(300,300)
  vertex(250,280)
  endShape(CLOSE)
  
  push()
  fill('black')
  bezier(260,255,280,280,300,320,350,300)
  pop()
  
  push()
  translate(263,231)
  rotate()
  fill('black')
  bezier(-2,5,10,30,20,45,90,70)
  pop()
  
  beginShape()//back of the head
 
  vertex(284,267)
  vertex(310,305)
  vertex(240,290)
  vertex(190,320)
  vertex(130,390)
  vertex(320,390)
  vertex(360,300)
  vertex(360,200)
  vertex(350,180)
  vertex(300,190)
  vertex(275,215)
  vertex(330,200)
  vertex(320,220)
  vertex(300,240)
  vertex(340,290)

  endShape()
  
  bezier(350,180,400,220,400,260,340,350)//Tail end of the tail
  bezier(299,191,310,180,330,165,350,180.4)//Top of the tail
  
   push()
  fill('black')
  bezier(240,285,230,330,220,330,130,350)//Upper left at the bottom
  bezier(100,400,185,350,260,320,390,410)//bottom
  
  beginShape()//Between the above
  vertex(130,340)
  vertex(200,340)
  vertex(240,330)
  vertex(210,345)
  vertex(150,360)
  endShape()
  
  ellipse(348,320,20,100)//Lower right ellipse

  circle(310,360,60)//Two circles at the bottom
  ellipse(290,360,110,50)
  
  beginShape()//right side
  vertex(400,300)
  vertex(390,260)
  vertex(360,240)
  vertex(330,230)
  endShape()
  
  pop()
  

  
  pop()
  
 push() //dragon2
  
  noStroke();
  scale(0.25)
  translate(950,500)
 
 noStroke();

  fill(255)
  strokeWeight(2);
  
  bezier(105,221,90,190,120,200,140,211);

  beginShape();//front of mouse
  vertex(105, 220);
  vertex(140, 210);
  vertex(125, 235);
  vertex(115, 270);
  vertex(105, 220);
  vertex(100,240);
  vertex(115, 270);
  endShape(CLOSE);
  
  beginShape();//top of mouse
  vertex(124,235)
  vertex(150,260);
  vertex(160,240);
  vertex(170,255);
  vertex(180,240);
  vertex(190,250);
  vertex(220,235);
  vertex(220,220);
  vertex(190,220);
  vertex(139,210);
  endShape(CLOSE)
  
  bezier(128,250,130,280,150,300,170,300)  //lower jaw
  
  beginShape();//down of mouse
  vertex(128,250)
  vertex(150,270);
  vertex(160,255);
  vertex(173,270);
  vertex(180,260);
  vertex(200,265);
  vertex(215,250)
  vertex(220,235)
  vertex(220,280)
  vertex(200,300)
  vertex(185,295)
  vertex(169,300)
  endShape(CLOSE)
  
  
  
  bezier(160,220,175,200,195,190,220,198)  //upper part of the eye
  beginShape()//eyes
  vertex(159,219)
  vertex(219,198)
  vertex(225,205)
  vertex(160,225)
  endShape(CLOSE)
  beginShape()//eyes
  vertex(224,205)
  vertex(220,220)
  vertex(205,220)
  vertex(219,205)
  endShape(CLOSE)
  
  bezier(215,205,215,190,230,160,270,130)
  
  beginShape()
  vertex(195,205)
  vertex(225,180)
  vertex(250,150)
  vertex(230,200)
  vertex(240,200)
  vertex(260,160)
  vertex(280,150)
  vertex(265,170)
  vertex(257,200)
  vertex(280,170)
  vertex(310,165)
  vertex(283,180)
  vertex(275,200)
  vertex(250,280)
  vertex(220,280)
  vertex(220,230)
  endShape(CLOSE)
  
  beginShape()
  vertex(240,230)
  vertex(290,233)
  vertex(320,210)
  endShape(CLOSE)  
  
  beginShape()
  vertex(260,230)
  vertex(300,250)
  vertex(340,297)
  vertex(300,300)
  vertex(250,280)
  endShape(CLOSE)
  
  push()
  fill('black')
  bezier(260,255,280,280,300,320,350,300)
  pop()
  
  push()
  translate(263,231)
  rotate()
  fill('black')
  bezier(-2,5,10,30,20,45,90,70)
  pop()
  
  beginShape()//back of the head
 
  vertex(284,267)
  vertex(310,305)
  vertex(240,290)
  vertex(190,320)
  vertex(130,390)
  vertex(320,390)
  vertex(360,300)
  vertex(360,200)
  vertex(350,180)
  vertex(300,190)
  vertex(275,215)
  vertex(330,200)
  vertex(320,220)
  vertex(300,240)
  vertex(340,290)

  endShape()
  
  bezier(350,180,400,220,400,260,340,350)//Tail end of the tail
  bezier(299,191,310,180,330,165,350,180.4)//Top of the tail
  
   push()
  fill('black')
  bezier(240,285,230,330,220,330,130,350)//Upper left at the bottom
  bezier(100,400,185,350,260,320,390,410)//bottom
  
  beginShape()//Between the above
  vertex(130,340)
  vertex(200,340)
  vertex(240,330)
  vertex(210,345)
  vertex(150,360)
  endShape()
  
  ellipse(348,320,20,100)//Lower right ellipse

  circle(310,360,60)//Two circles at the bottom
  ellipse(290,360,110,50)
  
  beginShape()//right side
  vertex(400,300)
  vertex(390,260)
  vertex(360,240)
  vertex(330,230)
  endShape()
  
  pop()
  

  
  pop()

}