// Create needed constants
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

// Create an instance of a db object for us to store the open database in
let db;

window.onload = function() {
    // Open our database; it is created if it doesn't already exist
    // (see onupgradeneeded below)
    let request = window.indexedDB.open('notes_db', 1);
};