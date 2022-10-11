"use strict";

drawline();

function drawline() {
    let canvas = document.querySelector("canvas")
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");
 
    context.beginPath();
    context.fillStyle = "PINK";
    context.rect(50,50,100,200);
    context.fill();
    context.stroke();


    context.beginPath();
    context.fillStyle = "PINK";
    context.rect(50,350,100,100);
    context.fill();
    context.stroke();



    context.beginPath();
    context.fillStyle = "PINK";
    context.rect(150,250,300,100)
    context.fill();
    context.stroke();


    context.beginPath();
    context.fillStyle = "PINK";
    context.rect(250,150,100,100);
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle = "PINK";
    context.rect(450,50,100,200);
    context.fill();
    context.stroke();


    context.beginPath();
    context.fillStyle = "PINK";
    context.rect(450,350,100,100);
    context.fill();
    context.stroke();

}