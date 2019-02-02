/* ------------------------------------------------------------------------
 * Processing Community Day 2019 - AusNZ (Brisbane, Melbourne, Wellington)
 * 
 * =Screen save code=
 * Copy the whole keyPressed() function below and add it to the end of your 
 * code to save the current canvas as a file. 
 * 
 * When you press either 's' or 'S' on your keyboard, it will
 * save a snapshot of the current canvas to a file.
 * 
 * If you set your name, site, and Sol LeWitt instruction number in the
 * variables at the top of the code, the image will be automatically saved
 * with a useful filename for including in the zine.
 *
 * =Author notes= 
 * David Harris, 2 Feb 2019. Free for distribution and modification.
------------------------------------------------------------------------ */

// Put your contact info in here so that the file is named appropriately
String person = "DavidHarris"; //Best in this format
String site = "BNE"; // for Brisbane, or "WLG" for Wellington, or "MEL" for Melbourne
int instruction = 86; // The number of the Sol LeWitt wall drawing you are replicating

// This example setup() function just makes a canvas of 600x600 pixels with
// a white background.
void setup() {
  size(600,600);
  background(255);
}

// This example draw() loop just continually draws lines from one random 
// position on the canvas to another random position on the canvas.
void draw() {
  line(random(600),random(600),random(600),random(600));
}

// The keyPressed() function here detects a user pressing either 's' or 'S'
// and then saves the current canvas as an image. You can change the folder
// ('images') if you'd like or just find it below your sketch folder.
// 
// The filename includes in the middle a timestamp of the hour, minute, 
// and second so that you don't overwrite a previous file. The nf() 
// function just formats each of the numbers for hour, minute, and second 
// into a two digit format to make nice and pretty filenames.
//
// The messages "Saving..." and "Done saving." will be printed to the 
// console so you can check it is working. They won't display on the canvas.
void keyPressed() {
  if(key == 's' || key == 'S'){
    println("Saving...");
    String fname = "images/" + site + nf(instruction, 4) + person + nf(hour(),2) + nf(minute(),2) + nf(second(),2) + ".png";
    save(fname);
    println("Done saving.");
  }
}
