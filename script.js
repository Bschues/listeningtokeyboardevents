let boxTop = 200;
let boxLeft = 200;
'use strict';

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName == "ArrowDown") {
        // console.log("ArrowDown");
        boxTop = boxTop + 10;
        document.getElementById("box").style.top = boxTop + "px";
    }
    else if (keyName == "ArrowUp") {
        // console.log("ArrowUp");
        boxTop = boxTop - 10;
        document.getElementById("box").style.top = boxTop + "px";
    }
    else if (keyName == "ArrowRight") {
        // console.log("ArrowRight");
        boxLeft = boxLeft + 10;
        document.getElementById("box").style.left = boxTop + "px";
    }
    else if (keyName == "ArrowLeft") {
        // console.log("ArrowLeft");
        boxLeft = boxLeft - 10;
        document.getElementById("box").style.left = boxTop + "px";
    }
});
//document.getElementById("box").style.top = boxtop + "px";