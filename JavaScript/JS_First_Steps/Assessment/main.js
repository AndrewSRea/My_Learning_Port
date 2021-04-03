// Adding a JS file to accompany the `index.html` file

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

let insertX = ['Willy the Goblin',
               'Big Daddy',
               'Father Christmas'];

let insertY = ['the soup kitchen',
               'Disneyland',
               'the White House'];

let insertZ = ['spontaneously combusted',
               'melted into a puddle on the sidewalk',
               'turned into a slug and crawled away'];

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}