let animateDiv = document.getElementById('animate');
let containerDiv = document.getElementById('container');
let button = document.querySelector('button');
let position = 0;

function myMove() {
    // Use setInterval to move the div to the right
    let interval = setInterval(function() {
        position += 10;
        animateDiv.style.left = position + 'px';
        // Check if the div is at the right edge of the container
        if (position >= containerDiv.clientWidth - animateDiv.clientWidth) {
            clearInterval(interval); // Stop the interval when it reaches the right edge
        }
    }, 50);
}