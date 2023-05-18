/*                      JS Link Page                */

function Home(link){
    location.href = './Index.html';
}

function Search(link){
    location.href = './Search.html';
}
function Library(link){
    location.href = './Library.html';
}


Playlink = Array.from(document.getElementsByClassName('play-pause'));
play-pause.forEach((element, i)=>{ 
        element.addEventListener('click', ()=>{
             location.href = './Library.html';
        })
})
