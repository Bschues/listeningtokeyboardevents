const boxTop = 200;
const boxLeft = 200;
'use strict';

document.addEventListener('keydown', (event) => {
     const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    document.getElementById("box").style.top = boxtop + "px";
});
//document.getElementById("box").style.top = boxtop + "px";