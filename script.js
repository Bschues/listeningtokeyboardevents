'use strict';
let boxTop = 585;
let boxLeft = 20;


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName == "ArrowDown") {
        // console.log("ArrowDown");
        boxTop = boxTop + 15;
        document.getElementById("box").style.top = boxTop + "px";
    };
    if (keyName == "ArrowUp") {
        // console.log("ArrowUp");
        boxTop = boxTop - 15;
        document.getElementById("box").style.top = boxTop + "px";
    };
    if (keyName == "ArrowRight") {
        // console.log("ArrowRight");
        boxLeft = boxLeft + 15;
        document.getElementById("box").style.left = boxLeft + "px";
    };
    if (keyName == "ArrowLeft") {
        // console.log("ArrowLeft");
        boxLeft = boxLeft - 15;
        document.getElementById("box").style.left = boxLeft + "px";
    };
});
//document.getElementById("box").style.top = boxtop + "px";