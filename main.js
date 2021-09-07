canvas = document.getElementById("myCanvas");
ctx  = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

var images_array = ["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
random_number = Math.floor(Math.random() * 5);
console.log(random_number);
bg_img = images_array[random_number];
rover_img = "rover.png";
function add(){
bg_imgtag = new Image();
bg_imgtag.onload = uploadBackground;
bg_imgtag.src = bg_img;

rover_imgtag = new Image();
rover_imgtag.onload = uploadRover;
rover_imgtag.src = rover_img;
}

function uploadRover() {
ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

function uploadBackground() {
ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
keypressed = e.keyCode;
console.log(keypressed);
if (keypressed == "38"){
    up();
    console.log("up");

}
if (keypressed == "40"){
    down();
    console.log("down");
    
}
if (keypressed == "37"){
    left();
    console.log("left");
    
}
if (keypressed == "39"){
    right();
    console.log("right");
    
}
}
function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed , x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
        
    }
}
function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("when down arrow is pressed , x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
        
    }
}
function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("when left arrow is pressed , x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
        
    }
}
function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("when right arrow is pressed , x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
        
    }
}
