"use strict";

drawline();

function drawline() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.beginPath();
	context.fillStyle = "black";
	context.rect(50, 50, 300, 300);
	context.fill();
	context.stroke();

	context.beginPath();
	context.fillStyle = "GREEN";
	context.rect(50, 50, 70, 150);
	context.fill();
	context.stroke();

	context.beginPath();
	context.fillStyle = "GREEN";
	context.rect(50, 280, 70, 70);
	context.fill();
	context.stroke();

	context.beginPath();
	context.fillStyle = "GREEN";
	context.rect(120, 200, 160, 80);
	context.fill();
	context.stroke();

	context.beginPath();
	context.fillStyle = "GREEN";
	context.rect(165, 129, 70, 70);
	context.fill();
	context.stroke();

	context.beginPath();
	context.fillStyle = "GREEN";
	context.rect(280, 50, 70, 150);
	context.fill();
	context.stroke();

	context.beginPath();
	context.fillStyle = "GREEN";
	context.rect(280, 280, 70, 70);
	context.fill();
	context.stroke();
}
