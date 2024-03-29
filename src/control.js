"use strict";
//EXPAND CONTROL
const expandBtn = document.querySelector('.expand--btn');
const content = document.querySelector('.expand--content');

let isExpand = true;

const expand = () => {
    if (isExpand) {
        isExpand = !isExpand;
        content.classList.remove('none');
        expandBtn.style.transform = 'rotate(270deg)';
    }else{
        isExpand = !isExpand;
        content.classList.add('none');
        expandBtn.style.transform = 'rotate(0deg)';
    }
}

expandBtn.addEventListener('click', expand);

//SLIDER CONTROL
const example = document.querySelector('.example');
const prev = document.querySelector('.slider--btn-prev');
const next = document.querySelector('.slider--btn-next');
const parent = document.querySelector('.slider--content').getBoundingClientRect().width;
const exampleWidth= example.getBoundingClientRect().width;
const stop = parent - exampleWidth;

let position = 0;

const slideNext = () => {
    if(position > stop) position -= parent;
    else position = 0;
    console.log(position);
    example.style.marginLeft = position+'px';
}
const slidePrev = () => {
    if(position < 0) position += parent;
    else position = stop;
    console.log(position);
    example.style.marginLeft = position+'px';
}

next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);

//SWIPER CONTROL
const items = document.querySelector('.items');
const showBtn = document.querySelector('.swiper--btn');

const theyalow = document.querySelector('.theyalow');
const theyalowImg = document.querySelector('.theyalow-img');
const theyalowDesc = document.querySelector('.theyalow-desc');

const rdp = document.querySelector('.rdp');
const rdpImg = document.querySelector('.rdp-img');
const rdpDesc = document.querySelector('.rdp-desc');

let theyalowOp = parseInt(getComputedStyle(theyalow).opacity);
let rdpOp = parseInt(getComputedStyle(rdp).opacity);
let startPoint = 0;
let show = false;

//swipe 
const slide = (flag) => {
    if (flag){
        theyalowOp = theyalowOp ? 0 : 1;
        rdpOp = rdpOp ? 0 : 1;
    }


    theyalow.style.opacity = theyalowOp;
    rdp.style.opacity = rdpOp;

    if (theyalowOp){
        theyalow.style.zIndex = 100;
        rdp.style.zIndex = 0;
    }else if(rdpOp){
        theyalow.style.zIndex = 0;
        rdp.style.zIndex = 100;
    }
}

const handleSwipeStart = (e) => {
    startPoint = parseInt(e.changedTouches[0].clientX);
}
const handleSwipeEnd = (e) => {
    let dist = parseInt(e.changedTouches[0].clientX) - startPoint;
    if(dist !== 0) slide(true);
}
// show description control

const checkOpacity = (el) => parseInt(getComputedStyle(el).opacity);

const handleClick = () =>{
    if (theyalowOp){
        theyalowImg.style.opacity = checkOpacity(theyalowImg) ? 0 : 1;
        theyalowDesc.style.opacity = checkOpacity(theyalowDesc) ? 0 : 1;
    }else if (rdpOp){
        rdpImg.style.opacity = checkOpacity(rdpImg) ? 0 : 1;
        rdpDesc.style.opacity = checkOpacity(rdpDesc) ? 0 : 1;
    }
}

showBtn.addEventListener('touchend', handleClick);
items.addEventListener('touchstart', handleSwipeStart);
items.addEventListener('touchend', handleSwipeEnd);