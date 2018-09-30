function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(0);
  angleMode(DEGREES);
  frameRate(180);
}

function draw() {
  // put drawing code here

  //angoli e trasformazioni
  var angle = 180 * sin(frameCount * 4);
  var angle2 = 200 * sin(frameCount);
  var angle3 = 200 * cos(frameCount);

  translate(width / 2, height / 2);
  rotate(frameCount);

  //colori
  stroke(lerpColor(color('#6666FF'), color('#FF6633'), frameCount / 210));

  //petali
  line(0, 0, 0, angle);
  line(0, 0, 0, -angle);

  //colori
  fill(lerpColor(color('#6666FF'), color('#FF6633'), frameCount / 210));
  noStroke();

  //anello
  ellipse(150, 150, 10, 10)
  ellipse(150, -150, 10, 10)
  ellipse(-150, 150, 10, 10)
  ellipse(-150, -150, 10, 10)
  
  //pillola verticale
  // push();
  // rotate(-90);
  // stroke(lerpColor(color('#6666FF'), color('#FF6633'), frameCount / 210));
  // line(angle3,0,0,angle2);
  // pop();
  // //pillola orizzontale
  // push();
  // stroke(lerpColor(color('#6666FF'), color('#FF6633'), frameCount / 210));
  // line(angle3,0,0,angle2);
  // pop();

  //EFFETTO CUORE
  // rotate(-90);
  // stroke(lerpColor(color('#6666FF'), color('#FF6633'), frameCount / 210));
  // line(angle3,0,-200,-angle2);
  // stroke(lerpColor(color('#6666FF'), color('#FF6633'), frameCount / 210));
  // line(angle3,0,200,-angle2);

if (frameCount == 180) {
  noLoop();
  }
}
