var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  mic.start();
  angleMode(DEGREES);
  background(0);
  frameRate(20);
  var s = 'Speak to me';
  textFont('EB Garamond');
  textSize(60);
  fill('white');
  text(s, 50, 70); // Text wraps within text box
}

function draw() {

  var vol = mic.getLevel();
  noFill();
  if (frameCount<=200) {
  stroke(random(50),random(150),random(250));
  beginShape();
  var spacing = map(vol*5, 0, width, 20, 300);
  for (var a=0; a<360; a+=spacing){
    var x = 800*sin(a);
    var y = 700*cos(a);
    ellipse(width/2,height/2,x,y);
  }

  endShape(CLOSE);
  }

  if (frameCount>=200) {
  stroke(random(250),random(150),random(50));
  beginShape();
  var spacing = map(vol*5, 0, width, 20, 300);
  for (var a=0; a<270; a+=spacing){
    var x = 900*sin(a);
    var y = 700*cos(a);
    ellipse(width/2,height/2,x,y);
  }

  endShape(CLOSE);
  }

  // Get the overall volume (between 0 and 1.0)


}
