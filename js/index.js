/** @format */

"use strict;";

console.log("Hi from barchart");

let data = [];
// Create mock data
function mockData() {
	for (let i = 0; i < 40; i++) {
		let ran = Math.floor(Math.random() * 32) + 1;
		data.push(ran);
	}
	showData();
}

// Visualize data
function showData() {
	const barChart = document.querySelector(".bar_chart");
	data.forEach((el) => {
		barChart.innerHTML += `<div class="bar" style= "height: ${
			(el / data.length) * 100
		}%;"></div>`;
	});
}

mockData();
console.log(data);
