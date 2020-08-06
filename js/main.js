/* run page */
/* if all orange,blue,green running shoe images are clicked on atleast once then an alert will pop up saying you won free shoes */
const clickChange = new Array(0,0,0,0,0,0,0,0,0); // 0 index is for green shoe in top left, 8th index is for blue shoe in bottom right if 0 means not clicked on 1 means clicked on

function grs1(){ /*green running shoe 1 in top left */
    clickChange[0] = 1;
    console.log(clickChange[0]);
    clickCheck();
}
function grs2(){
    clickChange[1] = 1;
    console.log(clickChange[1]);
    clickCheck();
}
function grs3(){
    clickChange[2] = 1;
    console.log(clickChange[2]);
    clickCheck();
}

function ors1(){ /* orange running shoe 1 in middle left */
    clickChange[3] = 1;
    console.log(clickChange[3]);
    clickCheck();
}
function ors2(){
    clickChange[4] = 1;
    console.log(clickChange[4]);
    clickCheck();
}
function ors3(){
    clickChange[5] = 1;
    console.log(clickChange[5]);
    clickCheck();
}

function brs1(){ /* blue running shoes in bottom left */
    clickChange[6] = 1;
    console.log(clickChange[6]);
    clickCheck();
}
function brs2(){
    clickChange[7] = 1;
    console.log(clickChange[7]);
    clickCheck();
}
function brs3() {
    clickChange[8] = 1;
    console.log(clickChange[8]);
    clickCheck();
}
var alertamount = 1; // makes it so alert only happens once
function clickCheck() {
    var counter = 0;
    for (let i = 0; i < clickChange.length; i+=1) {
        if (clickChange[i]===1) {
            counter +=1;
        }
    }
    console.log(counter);
    // if all green, blue, and orange shoe images are clicked (not marthon one at top) on atleast once alert will popup
    if (counter === clickChange.length) { 
        if (alertamount ===1) {
        alert('You Won Free Shoes!');
        alertamount = alertamount + 1;
        }
    }
}

/*Sports Page */
const bgEl = document.getElementById('bg');
const img1 = document.getElementById('sportimg1');
const img2 = document.getElementById('sportimg2');
const img3 = document.getElementById('sportimg3');
function check() /*Changes background and images on page depending on which of three sports is entered */ {
const answerEl = document.getElementById('answer');
if (answerEl.value === 'Basketball') {
    bgEl.className = 'basketball';
    img1.className = 'basketballimg1';
    img2.className = 'basketballimg2';
    img3.className = 'basketballimg3';
}
else if (answerEl.value === 'Soccer') {
    bgEl.className = 'soccer';
    img1.className = 'soccerimg1';
    img2.className = 'soccerimg2';
    img3.className = 'soccerimg3';
}
else if (answerEl.value === 'Baseball') {
    bgEl.className = 'baseball';
    img1.className = 'baseballimg1';
    img2.className = 'baseballimg2';
    img3.className = 'baseballimg3';
}
else {
    alert('Try again and type in one of the three sports');
}
}

/* casual page */
const casualimg5El = document.getElementById('casualimg5');
/* generates random shoe image on casual page */
function generate() {
    const n = (Math.floor(Math.random() * 6) + 0);
    console.log(n);
    if (n===0) {
        casualimg5El.className = 'casualimg5';
    }
    if (n===1) {
        casualimg5El.className = 'casualimg5-1';
    }
    if (n===2) {
        casualimg5El.className = 'casualimg5-2';
    }
    if (n===3) {
        casualimg5El.className = 'casualimg5-3';
    }
    if (n===4) {
        casualimg5El.className = 'casualimg5-4';
    }
    if (n===5) {
        casualimg5El.className = 'casualimg5-5';
    }
}