/** @format */

"use strict;";

console.log("Hi from barchart");

let data = [];
let count = 0;
let scrollSpeed = 500;

function start() {
	setTimeout(showData, scrollSpeed);
}

// Visualize data with 32 is 100% and every entry is relative to 32
function appendData() {
	const barChart = document.querySelector(".bar_chart");
	barChart.innerHTML += `<div class="bar" style= "height: ${
		(data[0] / 32) * 100
	}%;"></div>`;
}

// Get The Data
function getData() {
	const ran = getNumberOfCustomers();

	if (count < 40) {
		data.unshift(ran);
		count++;
	} else {
		data.length = 39;
		data.unshift(ran);
	}
	console.log(data);
	start();
}

// Show the data all together
function showData() {
	getData();
	appendData();
}

// Get number of customers
function getNumberOfCustomers() {
	// Fake amount of guests. Max 32
	return Math.floor(Math.random() * 32);
}

start();
