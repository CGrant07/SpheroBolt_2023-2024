//Team Members: Carson Grant, Cade Smith
//Name: Carson Grant
//Date: 1.22.2024
//Program: Sphero Bolt Maze
//Bolt ID: B2F8

async function startProgram() {

	setMainLed({ r: 255, g: 255, b: 255 });

	await speak("Start", true); 

	await scrollMatrixText('Start!', { r: 66, g: 56, b: 255 }, 15, true)



}
