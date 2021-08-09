var canvas=new fabric.Canvas ("my_canvas");
blockImagewidth=25;
blockImageheight=25;
player_x=20;
player_y=20; 
var player_object="";
var block_object="";
function player_load () {
    fabric.Image.fromURL("player.png", function(img) {
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add (player_object);
    }); 
}
function block_load(getimage) {
    fabric.Image.fromURL(getimage, function(img) {
        block_object=img;
        block_object.scaleToWidth(blockImagewidth);
        block_object.scaleToHeight(blockImageheight);
        block_object.set({
            top:player_y,left:player_x
        });
        canvas.add (block_object);
    }); 
}
window.addEventListener ("keydown", my_keydown);

function my_keydown(e) {
keypressed = e.keyCode;
console.log (keypressed);
if (e.shiftkey == true && keypressed == '80' ) {
console.log ("user has pressed shift+p");
blockImagewidth= blockImagewidth +10;
blockImageheight=blockImageheight +10;
document.getElementById("name").innerHTML=blockImagewidth;
document.getElementById("nameh").innerHTML=blockImageheight;
}
if (e.shiftkey == true && keypressed == '77' ) {
    console.log ("user has pressed shift+m");
    blockImagewidth= blockImagewidth -10;
    blockImageheight=blockImageheight -10;
    document.getElementById("name").innerHTML=blockImagewidth;
    document.getElementById("nameh").innerHTML=blockImageheight;
    }
    if (keypressed=='38') {
        move_up();
        console.log("we are moving up");
    }
    if (keypressed=='40') {
        move_down();
        console.log("we are moving down");
    }
    if (keypressed=='37') {
        move_left();
        console.log("we are moving left");      
    }
    if (keypressed=='39') {
        move_right();
        console.log("we are moving right");
    }
    if (keypressed=='76') {
        block_load("light_green.png");
        console.log("l");
    }
}