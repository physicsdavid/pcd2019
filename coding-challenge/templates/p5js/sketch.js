/* ------------------------------------------------------------------------
 * Processing Community Day 2019 - AusNZ (Brisbane, Melbourne, Wellington)
 * 
 * =============== IMPORTANT NOTE ============
 * This code will only save the screen if the particular canvas you
 * are drawing in is active. If you're using the p5.js online editor
 * at https://editor.p5js.org, that means you will need to click on the
 * canvas before it will actually save.
 * ===========================================
 *
 * =Screen save code=
 * Copy the whole keyTyped() function below and add it to the end of your 
 * code to save the current canvas as a file. 
 * 
 * When you press either 's' or 'S' on your keyboard, it will
 * save a snapshot of the current canvas to a file.
 * 
If you set your name, site, and Sol LeWitt instruction number in the
 * variables at the top of the code, the image will be automatically saved
 * with a useful filename for including in the zine.
 *
 * =Author notes= 
 * David Harris, 2 Feb 2019. Free for distribution and modification.
------------------------------------------------------------------------ */

let person = "DavidHarris"; //Best in this format
let site = "BNE"; // for Brisbane, or "WLG" for Wellington, or "MEL" for Melbourne
let instruction = 86; // The number of the Sol LeWitt wall drawing you are replicating

// This example setup() function just makes a canvas of 400x400 pixels with
// a white background.
function setup() {
  createCanvas(400, 400);
	background(255);
}

// This example draw() function just continually draws lines from one random 
// position on the canvas to another random position on the canvas.
function draw() {
  line(random(400),random(400),random(400),random(400));
}

// The keyTyped() function here detects a user pressing either 's' or 'S'
// and then saves the current canvas as an image. You can change the start of 
// the filename ('screen'), and/or the file type ('.png') although we prefer 
// you keep the file type as a PNG for ease of use in compiling the zine.
// 
// The filename includes in the middle a timestamp of the hour, minute, 
// and second so that you don't overwrite a previous file. The nf() 
// function just formats each of the numbers for hour, minute, and second 
// into a two digit format to make nice and pretty filenames.
//
// The messages "Saving..." and "Done saving." will be printed to the 
// console so you can check it is working. They won't display on the canvas.
function keyTyped() {
  if (key === 's' || key === 'S') {
		let fname = site + nf(instruction, 4) + person + nf(hour(),2) + nf(minute(),2) + nf(second(),2) + ".png";
    print('Saving...');
    save(fname);
    print('Done saving.');
  }
}