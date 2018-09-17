function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
    stroke(255);
  } else {
    fill(255);
    stroke(0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
