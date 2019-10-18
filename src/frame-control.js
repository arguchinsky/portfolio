'use strict';
const btnSwitch = document.querySelector('.switch');
const text = document.querySelector('.switch-text');
const frame = document.querySelector('.frame');
const frameContent = document.querySelector('.frame--content');

// FUNCTION CHANGE BUTTON TEXT
function changeText(width){
    let content = width > 640  ? 'mobile' : 'desktop';
    text.textContent = content.toUpperCase();
}

//FUNCTION SWITCHING LAYOUT
function switchLayout(){
    let width = parseFloat(getComputedStyle(frame).width);
    switch(frameContent.classList[1]){
        case 'theyalow':
        frame.style.width = width > 640 ? '640px' : '100%';
        frameContent.style.height = width > 640 ? '1551px' : '1849px';
        break;
        case 'rdp':
        frame.style.width = width > 640 ? '375px' : '100%';
        frameContent.style.height = width > 640 ? '9109px' : '10154.6px';
        break;
    }
    changeText(parseFloat(getComputedStyle(frame).width));
}

btnSwitch.addEventListener('click', switchLayout);
