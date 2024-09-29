/*
    Code sample for CSCI 2408 Computer Graphics 
    (c)2022-24 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/
var canvas;
var context;
window.onload = init;

var GRID_SIZE = 30;
var GRID_COLOR = 'grey';

// Coordinates of the line to draw
var lineX0, lineY0;
var lineX1, lineY1;

// Remember if you are to draw a line or mark the start point
var startNewLine = false;

function init() {
    // Get reference to the 2D context of the canvas
    canvas = document.getElementById("gl-canvas");
    context = canvas.getContext("2d");

    if (context) {
        console.log('Context is OK!')
        drawGrid();
        // Set a listener for the mousedown event
        canvas.onclick = onClick;
    }
}

function onClick(e) {
    startNewLine = !startNewLine;

    x = e.clientX;
    y = e.clientY;
    console.log(x, ':', y);
}

function drawLine(x0, y0, x1, y1) {
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.stroke();
}