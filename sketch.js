function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(200);
  angleMode(DEGREES);
  frameRate(180);
}

function draw() {
  // put drawing code here
  translate(width/2,height/2);
  rotate(frameCount);
  stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/180));
  line(200*cos(frameCount),0,0,200*sin(frameCount));

  stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/180));
  line(200*cos(frameCount),0,-200,-200*sin(frameCount));

  stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/180));
  line(200*cos(frameCount),0,200,-200*sin(frameCount));

if (frameCount == 180) {
  noLoop();
  }
}
