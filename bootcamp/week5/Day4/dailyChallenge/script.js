let input = document.querySelector('#input');

input.addEventListener('keyup', function(event) {
    document.getElementById('output').textContent = event.target.value;
});