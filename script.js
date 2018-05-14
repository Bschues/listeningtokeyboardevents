'use strict';
let boxTop = 200;
let boxLeft = 200;


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName == "ArrowDown") {
        // console.log("ArrowDown");
        boxTop = boxTop + 25;
        document.getElementById("box").style.top = boxTop + "px";
    };
    if (keyName == "ArrowUp") {
        // console.log("ArrowUp");
        boxTop = boxTop - 25;
        document.getElementById("box").style.top = boxTop + "px";
    };
    if (keyName == "ArrowRight") {
        // console.log("ArrowRight");
        boxLeft = boxLeft + 25;
        document.getElementById("box").style.left = boxLeft + "px";
    };
    if (keyName == "ArrowLeft") {
        // console.log("ArrowLeft");
        boxLeft = boxLeft - 25;
        document.getElementById("box").style.left = boxLeft + "px";
    };
});
//document.getElementById("box").style.top = boxtop + "px";