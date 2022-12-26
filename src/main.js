// список груп
let playList = [
    {author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN"},
    {author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
    {author: "LYNYRD SKYNYRD", song:"FREE BIRD"},
    {author: "DEEP PURPLE", song:"SMOKE ON THE WATER"},
    {author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
    {author: "AC/DC", song:"BACK IN BLACK"},
    {author: "QUEEN", song:"WE WILL ROCK YOU"},
    {author: "METALLICA", song:"ENTER SANDMAN"}
];

const ol = document.createElement('ol');
ol.classList.add('playlist');
    playList.forEach((list) => {
        const li = document.createElement('li');
        li.innerText = `${list.author}/ ${list.song};`;
        ol.appendChild(li);
    });
document.querySelector("div").appendChild(ol);

// модальне вікно
const btnOpen = document.getElementById('btn-open');
const popup = document.getElementsByClassName('popup')[0];
btnOpen.addEventListener('click', () => {
    popup.style.display = 'block';
});

const btnClose = document.getElementById('btn-close');
btnClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

// світлофор
const btnSwitch = document.getElementById('btn-switch');
const lightRed = document.querySelector('.red');
const lightYellow = document.querySelector('.yellow');
const lightGreen = document.querySelector('.green');

btnSwitch.addEventListener('click', switchLight);

function switchLight(){
    if(lightRed.classList.contains('red')) {
        lightRed.classList.remove('red');
        lightYellow.classList.add('yellow');
    } else if (lightYellow.classList.contains('yellow')){
        lightYellow.classList.remove('yellow');
        lightGreen.classList.add('green');
    } else {
        lightGreen.classList.remove('green');
        lightRed.classList.add('red');
    } 
};