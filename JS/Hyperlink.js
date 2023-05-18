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

// document.getElementById('play').addEventListener('click', ()=>{
//      location.href = './Library.html';
// })
// document.querySelectorAll('.play-pause').forEach(()=>{
//     // Now do something with my button
// });
document.getElementsByClassName('play-pause')].forEach(el => {
    location.href = './Library.html';
})
