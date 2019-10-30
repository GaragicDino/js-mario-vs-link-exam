// Mario vs Link
'use strict';

// Global Variables
let marCount = 0;
let linkCount = 0;
let total1 = 0;
let total2 = 0; 

// Event Listeners
document.getElementById('mario').addEventListener('click', marioButton);
document.getElementById('link').addEventListener('click', linkButton);
document.getElementById('atk-btn').addEventListener('click', attackValue);
document.getElementById('madlib-btn').addEventListener('click', displayMessage)


// Event Function
function marioButton() {
    document.body.style.backgroundColor = 'pink';
    document.getElementById('html-color').style.backgroundColor = 'red';
    document.getElementById('info1').innerHTML = 'The Mushroom Kingdom';
    document.getElementById('info2').innerHTML = 'Princess Peach';
    document.getElementById('info3').innerHTML = 'Bowser';
    document.getElementById('image').src = 'images/mario.png';
    document.getElementById('mario-counter').innerHTML = marCount++;

}
// Event Function
function linkButton() {
    document.body.style.backgroundColor = 'green';
    document.getElementById('html-color').style.backgroundColor = 'lightgreen';
    document.getElementById('info1').innerHTML = 'Hyrule';
    document.getElementById('info2').innerHTML = 'Princess Zelda';
    document.getElementById('info3').innerHTML = 'Ganon';
    document.getElementById('image').src = 'images/link.png';
    document.getElementById('link-counter').innerHTML = linkCount++;

}

// Event Function
function attackValue() {
    // Input - attack and def numbers
    let marioStrength = Number(document.getElementById('mario-strength').value);
    let marioDef = Number(document.getElementById('mario-def').value);
    let linkStrength = Number(document.getElementById('link-strength').value);
    let linkDef = Number(document.getElementById('link-def').value);

    // Process - solving them
    total1 = Math.floor(2 * marioStrength / linkDef + 5)
    total2 = Math.floor(Math.round(linkStrength + 15) / marioDef)

    // Output - displaying attack numbers
    document.getElementById('mario-attack').innerHTML = total1;
    document.getElementById('link-attack').innerHTML = total2;

}   

// Event Function
function displayMessage() {
    // Input 
    let plumberItem = document.getElementById('plumber-item').value;
    let knightWeapon = document.getElementById('knight-wpn').value;
    let battleShout = document.getElementById('battle-shout').value;
    
    // Process - building a message
    let message = 'Mario with his '  + plumberItem +  ' whacks Link across the face dealing '  + total1 +
    ' damage. Then link pulls out his '  + knightWeapon +   ' and slashes Mario, dealing ' + total2  + ' damage, as Mario after lets out a "' + battleShout + '".'

    // Output - display the message 
    document.getElementById('output').innerHTML = message;


}   if (marCount < 1) {
    alert('You ready to rumble?')
} 








