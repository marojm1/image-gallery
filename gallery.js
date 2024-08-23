const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
var filenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
/* Declaring the alternative text for each image file */
const altTexts = {
    "pic1.jpg": "Closeup of a blue human eye", 
    "pic2.jpg":"Ceiling of cave", 
    "pic3.jpg":"Flowers", 
   "pic4.jpg":"Egyptian Pharaoh", "Butterfly on a leaf" };
/* Looping through images */
for (const filename in filenames)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${filename}`);
    newImage.setAttribute('alt', filename);
    thumbBar.appendChild(newImage);
    
}




/* Wiring up the Darken/Lighten button */