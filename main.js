var last_position_x, last_position_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

var width = screen.width;
var height = screen.height;
if (width < 992) {
    document.getElementById("myCanvas").width = width - 100;
    document.getElementById("myCanvas").height = height - 300;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", myStart);
canvas.addEventListener("touchmove", myTouch);

function myStart(e) {
    last_x_position = e.touches[0].clientX - canvas.offsetLeft;
    last_y_position = e.touches[0].clientY - canvas.offsetTop;
}

function myTouch(e) {
    var current_x_position = e.touches[0].clientX - canvas.offsetLeft;
    var current_y_position = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth=2;
    ctx.moveTo(last_position_x, last_position_y);
    ctx.lineTo(current_x_position, current_y_position);
    ctx.stroke();
    last_position_x = current_x_position;
    last_position_y = current_y_position;


}