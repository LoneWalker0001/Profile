let bg = document.getElementById("bg");
let mountain = document.getElementById("M2");
let cloud0 = document.getElementById( "C0");
let cloud1 = document.getElementById( "C1");
let cloud2 = document.getElementById( "C2");
let bird1 = document.getElementById("B1");
let bird2 = document.getElementById("B2");
let bird3 = document.getElementById("B3");

let sea = document.getElementById( "S2");
window.addEventListener( 'scroll' , function(){
var value = window.scrollY;
bg.style.top = value*0.8 +'px';
cloud0.style.left = -value * 0.8 + 'px';
cloud1.style.left =  value * 0.6 + 'px';
cloud2.style.left = -value * 0.5 + 'px';

bird1.style.left = value * 0.9 + 'px';
bird2.style.left = value * 0.7 + 'px';
bird3.style.left = value * 0.6 + 'px';

mountain.style.top = value * 0.22 + ' px' ;
sea.style.top = value * 0.20 + 'px' ;
})