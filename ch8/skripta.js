let cnv = document.getElementById("cnv");

let ctx = cnv.getContext("2d");

ctx.moveTo(10,10);
ctx.lineTo(400,40);
ctx.lineWidth = 10;
ctx.strokeStyle = "rgb(205,40,40)";
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(400,20);
ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(205,40,40)";
ctx.lineCap = "round";
ctx.stroke();


ctx.moveTo(50,50);
ctx.lineTo(70,70);
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(205,40,40)";
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(70,70);
ctx.lineTo(40,70);
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(205,40,40)";
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(40,70);
ctx.lineTo(50,50);
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(205,40,40)";
ctx.lineCap = "round";
ctx.stroke();

ctx.closePath();
ctx.fillStyle = "blue";
ctx.fill();

let cx = 150;
let cty = 300;
let rds = 100;

let startingAngl = 1.25 * Math.PI;
let endingAngl = 1.75 * Math.PI;

ctx.arc(cx, cty, rds, startingAngl, endingAngl);
ctx.stroke();