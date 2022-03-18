const canvas =  document.getElementById("canvas");
const btn_clear = document.getElementById("clear");
const btn_erase = document.getElementById("erase");
var eraseron = false;
const changesize = document.getElementById("changesize");
const size_show = document.getElementById("size_show");
var length = changesize.value; 
var mouseDown = 0;
document.body.onmousedown = function() { 
  mouseDown = 1;
}
document.body.click = function() {
    mouseDown = 1;
}
document.body.onmouseup = function() {
  mouseDown = 0;
}
size_show.innerHTML = `${length} x ${length}`;

changesize.addEventListener("change", function adjust_size() {
    length = changesize.value;
    size_show.innerHTML = `${length} x ${length}`;
    createcanvas(length);
});



btn_clear.addEventListener("click", function clearcanvas() {
    const nodeList = document.querySelectorAll(".box");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "whitesmoke";
    }
}
);

btn_erase.addEventListener("click", function switch_eraser() {
    if (eraseron) {
        eraseron = false;
        btn_erase.style.backgroundColor = "whitesmoke";
    }
    else {
        eraseron = true;
        btn_erase.style.backgroundColor = "#d2fe90";
    }
    
});

function createcanvas(length) {
    canvas.innerHTML = '';
    for (let i = 0; i < length * length; i++) {
    const box = document.createElement("div");
   
    box.addEventListener("mousemove", function changecolor() {
        if (mouseDown === 1) {
            if (eraseron) {
            box.style.backgroundColor = "whitesmoke";
        }
            else {
            box.style.backgroundColor =  `${document.getElementById("favcolor").value}`;
        }
    }
    });
    
    box.style.flex = `0 0 ${canvas.clientWidth / 16 / length}em`;
    box.classList.add("box");
    canvas.appendChild(box);
 }
}
createcanvas(length);