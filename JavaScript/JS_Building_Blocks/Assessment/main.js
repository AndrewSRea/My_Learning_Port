const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + [i] + '.jpg');
    thumbBar.appendChild(newImage); 

    newImage.onclick = function() {
        const bigImage = document.querySelector('.displayed-img');
        bigImage.setAttribute(newImage.getAttribute());
    };
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
    if (btn.getAttribute() === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}