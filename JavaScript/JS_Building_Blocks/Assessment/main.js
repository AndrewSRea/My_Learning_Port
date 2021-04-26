const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');  // stores a reference to the `thumb-bar` <div> inside a constant named `thumbBar`

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (i = 1; i <= 5; i++) {
    const newImage = document.createElement('img'); // creates a new <img> element and stores it inside a constant named `newImage`
    newImage.setAttribute('src', 'images/pic' + [i] + '.jpg'); // sets the `src` attribute of the `newImage` element to a placeholder value `xxx`
    thumbBar.appendChild(newImage); // appends this `newImage` element inside the `thumbBar`
}

/* Wiring up the Darken/Lighten button */
