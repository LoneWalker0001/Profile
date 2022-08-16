let bg = document.getElementById("bg");
let mountain = document.getElementById("M2");
let cloud = document.getElementById( "C2");
let bird = document.getElementById("B2");
let sea = document.getElementById( "S2");
window.addEventListener( 'scroll' , function(){
var value = window.scrollY;
bg.style.top = value*0.5 +'px';
cloud.style.left = -value * 0.3 + 'px';
bird.style.left = value * 0.6 + 'px';
mountain.style.top = value * 0.15 + ' px' ;
sea.style.top = value * 0.16 + 'px' ;
})
