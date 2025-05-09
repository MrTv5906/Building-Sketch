function setup() {
  createCanvas(600, 600);
  background('rgb(151,225,240)');
  fill("rgb(238,209,157)");
  quad(30,550,30,200,125,195,125,550); // house piece 1
  
  fill("rgb(197,172,153)");
  quad(120,550,35,550,35,450,120,450); // garage
  
  fill("#FFF6B1");
  circle(0,30,100,200,300,300);// sun
  
  fill("rgb(218,184,123)");
  quad(125,195,125,550,450,550,450,225);// house piece 2
  
  triangle(190,160,160,160,175,150);// chimney top
  quad(160,160,160,200,190,203,190,160);// chimney base
  
  fill("rgb(218,171,102)");
  quad(200,550,200,475,230,475,230,550);// Door
  fill("brown")
  circle(220,520,15,560)
  
  
  fill("white")
  quad(60,350,100,350,100,275,60,275); // window 1
  line(80,275,80,350);
  line(60,310,100,310);
  
  quad(150,225,150,275,200,275,200,225); // window 2
  line(150,250,200,250);
  line(175,275,175,225);
  
  quad(300,350,400,350,400,400,300,400); // window 3
  line(300,375,400,375);
  line(350,400,350,350);
  
  fill("rgb(238,209,157)");
  triangle(30,200,125,195,75,170); // roof
  
  let x = 0;
  while(x < 600){ // sidewalk
     fill("rgb(183,183,184)");
     quad(x,600,x+100,600,x+100,550,x,550)
     fill("rgb(221,221,224)");
     circle(x+15,583,15,500)
     fill("rgb(185,123,120)");
     circle(x+65,564,15,500)
     x+= 100;
  }
  
  fill("white"); // clouds
  noStroke()
  circle(225,90,50)
  circle(200,100,50)
  circle(250,110,50)
  circle(450,65,50)
  circle(425,60,50)
  circle(475,65,50)
} // end setup function
