
$.ajax({
  url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSmuHLlBk5Ts6VPcVSOT3TKda4pyfbhpeZGumrttC3cscJ1OhwHlRhOZvdQeKw6Mq-vH1ezwf-uPub7/pub?output=csv',
  dataType: 'text',
}).done(successFunction);

function successFunction(data) {
 console.log(data);
}

function setup() {
  createCanvas(1000, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
