let w = 400
let h = 400
let d = 40
function setup() {
  createCanvas(w, h);
}

function draw() {
  background(220);
  noStroke()
  
  fill(0,0,0)
  circle(w/2,h/2,d*8)
  
  
  fill(255,255,255)
  circle(w/2,h/2,d*7)
  
  fill(0,0,0)
  circle(w/2,h/2,d*6)
  

  
  
  fill(255,255,255)
  circle(w/2,h/2,d*7)
  
  
  fill(0,0,0)
  circle(w/2,h/2,d*6)
  
  
   fill(255,255, 255)
  circle(w/2,h/2,d*5)
  
  
   fill(0,0,0)
  circle(w/2,h/2,d*4)
  
   fill(255,255,255)
  circle(w/2,h/2,d*3)
  
  fill(0,0,0)
  circle(w/2,h/2,d*2)
  
  fill(255,0,0)
  circle(w/2,h/2,d)
}