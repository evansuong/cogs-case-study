

let mainContainer;
let page;
let newPage;
let sectionHeights = [];
let sections = [];


function changeBackgroundColor() {

    let scrollHeight = window.scrollY;

    if (scrollHeight < sectionHeights[0]) {
        if (page != 0) {
            document.documentElement.style.setProperty('--main-bg-color', '#202020');
            newPage = 0;
        }
    } else if (scrollHeight < sectionHeights[1]) {
        if (page != 1) {
            document.documentElement.style.setProperty('--main-bg-color', '#FF99C4');            document.querySelector('section#section-problem-statement').classList.add('active');
            newPage = 1;
        }
    } else if (scrollHeight < sectionHeights[2]) {
        if (page != 2) {
            document.documentElement.style.setProperty('--main-bg-color', '#73E499');
            newPage = 2;
        }
    } else if (scrollHeight < sectionHeights[3]){
        if (page != 3) {
            document.documentElement.style.setProperty('--main-bg-color', '#F4A547');
            newPage = 3;
        }
    } else if (scrollHeight < sectionHeights[4]){
        if (page != 4) {
            document.documentElement.style.setProperty('--main-bg-color', '#70DFF8');
            newPage = 4;
        }
    } else if (scrollHeight < sectionHeights[5]){
        if (page != 5) {
            document.documentElement.style.setProperty('--main-bg-color', '#DD9AFC');
            newPage = 5;
        }
    } else if (scrollHeight < sectionHeights[6]){
        if (page != 6) {
            document.documentElement.style.setProperty('--main-bg-color', '#7065ae');
            newPage = 6;
        }
    } else if (scrollHeight < sectionHeights[7]){
        if (page != 7) {
            document.documentElement.style.setProperty('--main-bg-color', '#FF435A');
            newPage = 7;
        }
    } else if (scrollHeight < sectionHeights[8]){
        if (page != 8) {
            document.documentElement.style.setProperty('--main-bg-color', '#3dae9a');
            newPage = 8;
        }
    } else if (scrollHeight < sectionHeights[9]){
        if (page != 9) {
            document.documentElement.style.setProperty('--main-bg-color', '#B6C6FD');
            newPage = 9;
        }
    } else if (scrollHeight < sectionHeights[10]){
        if (page != 10) {
            document.documentElement.style.setProperty('--main-bg-color', '#FE7070');
            newPage = 10;
        }
    } else {
        if (page != 11) {
            document.documentElement.style.setProperty('--main-bg-color', '#202020');
            newPage = 11;
        }
    }
   
    if (newPage != page) {
        page = newPage;
        for (let i = 0; i < sectionHeights.length; i++) {
            if (page == i) {
                sections[i].classList.add('active');
                sections[i].classList.remove('inactive');
            } else {
                sections[i].classList.remove('active');
                sections[i].classList.add('inactive');
            }
        }
    }
    
    console.log(page);
}

function init() {
    sections = [...document.querySelectorAll('section')];
    let sum = 0;

    sections.forEach((section) => {
        sum += section.offsetHeight;
        sectionHeights = [...sectionHeights, sum];
    });
    console.log(sectionHeights);
    
    mainContainer = document.querySelector('main'); 
    window.mainContainer = document.querySelector('body');
    window.addEventListener('scroll', changeBackgroundColor);
}

document.addEventListener('DOMContentLoaded', init);