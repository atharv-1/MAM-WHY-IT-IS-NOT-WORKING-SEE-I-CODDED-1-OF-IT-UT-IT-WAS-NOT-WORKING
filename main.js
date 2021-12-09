canvas =
document.getElementById("myCanvas")
ctx=canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth= 1;
ctx.rect(150,143,439,200);
ctx.strokeStyle();


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth= 1;
ctx.arc(250,120,40,0,2*Math.PI);
ctx.strokeStyle();

