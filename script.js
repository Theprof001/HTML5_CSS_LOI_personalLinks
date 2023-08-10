let mouseX = 0;
let mouseY = 0;
let offsetX = 0;
let offsetY = 0;

handler.addEventListener("mousedown", (e) => {
    e.preventDefault();
    mouseX = e.clientX;
    mouseY = e.clientY;

    const rect = draggable.getBoundingClientRect();

    offsetX = mouseX - rect.left;
    offsetY = mouseY - rect.top;

    draggable.classList.add("dragging");

    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", mouseup);
});

function mousemove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    draggable.style.left = left + "px";
    draggable.style.top = top + "px";
}

function mouseup() {
    draggable,classList.remove("dragging");
    document.removeEventListener("mousemove", mousemove);
    document.removeEventListener("mouseup", mouseup);
}