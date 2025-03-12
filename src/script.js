let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function () {
    count.innerText = parseInt(count.innerText) + 1; 
});

document.getElementById("decrement").onclick = function () {
    let newValue = parseInt(count.innerText) - 1;

};
