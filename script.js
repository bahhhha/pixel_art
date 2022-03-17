const canvas =  document.getElementById("canvas");
var color = "black";
function createcanvas(length) {
    canvas.innerHTML = '';
    for (var i = 0; i < length * length; i++) {
    const box = document.createElement("div");
    box.addEventListener("mousedown", function changecolor() {
        box.style.backgroundColor =  `${color}`;
    });
    box.style.flex = `0 0 ${canvas.clientWidth / 16 / length}em`;
    box.classList.add("box");
    canvas.appendChild(box);
 }
}
createcanvas(16);