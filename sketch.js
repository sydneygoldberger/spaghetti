// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// REFRENCE: https://p5js.org/reference/#/p5.Font/textToPoints


let font;
let wordChoice;
let points;
let bounds;
let n; 
let x;
let y = 0;

function preload(){
  font2 = loadFont("FoundersGroteskTextTest-Medium.otf");
  font = loadFont("FoundersGroteskX-CondensedTest-Regular.otf");
  img1 = loadImage('Bite-Sized_HW1-01.png');
  img2 = loadImage('Bite-Sized_HW1-02.png');
  img3 = loadImage('Bite-Sized_HW1-03.png');
  img4 = loadImage('Bite-Sized_HW1-04.png');
  pixelImage = loadImage('pixel.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  textFont(font);
  
  points = font.textToPoints("Spaghetti", 200, windowHeight/1.6, windowWidth/3, {
  sampleFactor: .7});
  
  bounds = font.textBounds('Spaghetti', 0, 0, width);
  // button1 = createButton('&nbsp;');
  // button1.id('button1');
  // button1.style('background-color', 'red');
  // button1.position(0, 0);
  // button1.style('width', '3vw');
  // button1.style('height', '3vw');
  // button1.style('border-radius', '3vw');
  // button1.style('margin', '2vw');
  // button1.style('border', 'none');

  // button2 = createButton('&nbsp;');
  // button2.id('button2');
  // button2.style('background-color', 'green');
  // button2.position(70, 0);
  // button2.style('width', '3vw');
  // button2.style('height', '3vw');
  // button2.style('border-radius', '3vw');
  // button2.style('margin', '2vw');
  // button2.style('border', 'none');

  // button3 = createButton('&nbsp;');
  // button3.id('button3');
  // button3.style('background-color', 'yellow');
  // button3.position(140, 0);
  // button3.style('width', '3vw');
  // button3.style('height', '3vw');
  // button3.style('border-radius', '3vw');
  // button3.style('margin', '2vw');
  // button3.style('border', 'none');

  // button4 = createButton('&nbsp;');
  // button4.id('button4');
  // button4.style('background-color', 'orange');
  // button4.position(210, 0);
  // button4.style('width', '3vw');
  // button4.style('height', '3vw');
  // button4.style('border-radius', '3vw');
  // button4.style('margin', '2vw');
  // button4.style('border', 'none');
  // button1.mousePressed(red);

  savebutton = createButton('SAVE');
  savebutton.mousePressed(saveImage);
  savebutton.position(0, 0);
  savebutton.style('margin', '2vw');
  savebutton.style('width', '80px');
  savebutton.style('height', '40px');
  savebutton.style('border-radius', '10px');
  savebutton.style('margin', '2vw');
  savebutton.style('border', 'none');
  savebutton.style('background-color', 'white');
  savebutton.style('font-family', 'Noto Sans Display, sans-serif');
  savebutton.style('font-weight', '500');
  savebutton.style('font-size', '20px');

}

function draw() {  
   background('#4a3096');
  spaghetti();
}


function spaghetti(){
  for (let i = 0; i < points.length; i++){
    push();
    translate(points[i].x, points[i].y);
    rotate(tan(millis()*.1, 0, 100, 0, HALF_PI));
    noStroke();
    image(img2, 10 * noise(i * 5), 30, 25, 25);
    image(img1, 10 * noise(i * .01), 12, 40, 40);
    image(img4, 10 * noise(i * .01), 15, 15, 15);
    pop();

    
} 
}

function saveImage(){
  save("myimage.png");
}