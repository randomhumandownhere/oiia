let oiia;
let oiiaUV;

function preload() {
  oiia = loadModel("ASSets/oiia.obj", true);
  oiiaUV = loadImage("ASSets/oiiaUV.png");
}

// DNR: if removed the other canvases disappear
function setup() {
  createCanvas(0, 0);
}

function twoD(p) {
  var canvas;
  p.setup = function () {
    canvas = p.createCanvas(windowWidth, windowHeight);
  };
  p.windowResize = function () {
    p.resizeCanvas(windowWidth, windowHeight);
  };
  p.draw = function () {
    p.translate(p.width / 2, p.height / 2);
    p.background("white");
    oiiaText();
    infoText();
  };
  oiiaText = function () {
    p.textAlign(CENTER, CENTER);
    p.textSize(200);
    p.fill(255);
    p.stroke(0);
    p.strokeWeight(4);
    p.text("oiia", 0, 0);
  };
  infoText = function () {
    p.textAlign(LEFT);
    p.textSize(12);
    p.fill(0);
    p.stroke(0);
    p.strokeWeight(0);
    p.text(str(p.width) + ", " + str(p.height), 50, 100);
    speed = map(p.mouseX, 0, p.windowWidth, -0.5, 0.5);
    p.text("~" + str(round(speed, 2)) + "X ", 50, 124);
  };
}

new p5(twoD);

function threeD(p) {
  var canvas;
  p.setup = function () {
    canvas = p.createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
  };
  p.windowResize = function () {
    p.resizeCanvas(windowWidth, windowHeight, WEBGL);
  };
  p.draw = function () {
    p.clear();
    p.stroke(0);
    p.strokeWeight(0);

    // oiia cat go brr
    p.rotateY(p.frameCount * speed);
    p.rotateX(PI);
    p.model(oiia);
    p.texture(oiiaUV);
  };
}

new p5(threeD);
