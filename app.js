const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Evenement clique qui a comme fonction de changer le background

btn.addEventListener('click', function() {
    //test
    console.log(document.body);
    // get random number entre 0 - 3
    const randomNumber = 1;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    console.log('hello');
});