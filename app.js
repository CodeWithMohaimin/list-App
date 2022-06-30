let btn = document.getElementById('btn');
let list = document.getElementById('list');

btn.addEventListener('click', function () {
    let least = list.lastElementChild.cloneNode(true)
    least.innerHTML = `That's a new item`
    list.appendChild(least)
})

let box = document.getElementById('box');

box.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').innerHTML = e.offsetX;
    document.getElementById('y-value').innerHTML = e.offsetY;

    if (e.offsetX === 70 && e.offsetY) {
        alert('70 70')
    }
})
