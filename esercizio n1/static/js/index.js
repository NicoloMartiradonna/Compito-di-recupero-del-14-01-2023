let d=document.getElementById("variazione")
let x=0
let y=0
let l=30
let w=600
let h=400


d.addEventListener("input", function(){
    l=parseInt(d.value)
    x=0
    y=0
    background(220)
})


function setup(){
    createCanvas(w,h)
    background(220)
}


function draw() {
    let r=random()
    let fillquadrato

    if(r>0.4){
        fillquadrato=0
    }
    else{
        fillquadrato=255
    }

    quadrato(fillquadrato)

}


function quadrato(fillquadrato){
    fill(fillquadrato)
    square(x,y,l)
    x=x+l

    

    if(x>600){
        x=0
        y=y+l
    }

    
}