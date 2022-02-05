var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mouse_event="";
var lastpositionx,lastpositiony ;
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e) {
   mouse_event="mousedown" 
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e) {
   mouse_event="mouseup" 
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e) {
   mouse_event="mouseleave" 
}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e) {
 current_position_of  
}