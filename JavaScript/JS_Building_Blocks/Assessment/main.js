const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (i = 1; i <= 5; i++) {
    let newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage); 

    newImage.onclick = function(e) {                                  // Correction on this line: an event (e) was added to the function
        // let bigImage = document.querySelector('.displayed-img');
        let imgAttr = e.target.getAttribute('src');                   // Explanation: `target`s the `newImage` `src` attribute and stores it in the `imgAttr` variable
        // bigImage.setAttribute(newImage.getAttribute());
        displayedImage.setAttribute('src', imgAttr);                  // Then sets the `src` attribute of the `displayedImage` <div> with the `newImage` `src` attribute (`imgAttr`)
    };
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
    let btnAttr = btn.getAttribute('class');   // stores the `btn`s `class` attribute in a variable called `btnAttr`
    // if (btn.getAttribute() === 'dark') {
    if (btnAttr === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}