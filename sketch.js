var rusheaSlider;
var zaniaSlider;
var nikiahSlider;
function setup(){
    createCanvas(600,400);
    background(255,0, 0);
    
    
    rusheaSlider = createSlider(0, 225, 0);
    rusheaSlider.position(20,20);
    
    zaniaSlider = createSlider(0, 225, 0);
    zaniaSlider.position(20, 60);
    
    nikiahSlider = createSlider(0, 225, 0);
    nikiahSlider.position(20,100);
}
function draw(){
    redValue = rusheaSlider();
    greenValue = zaniaSlider();
    blueValue = nikiahSlider();
}
