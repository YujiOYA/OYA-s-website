// JavaScript Document
'use strict'
if (process.browser) {
const outer = document.getElementsByClassName('repeat-button');
const inner = document.getElementsByClassName('inner');
for (let i = 0; i < outer.length; i++) {
            function change() {
                if(inner[i].classList.contains('is-pressed')){
                    inner[i].classList.remove('is-pressed');
                }else{
                    inner[i].classList.add('is-pressed');
                }
            }
    
    const timer = setInterval(change.bind(undefined, "change"), 1000);
    //outer[i].addEventListener("scroll", change);
    //console.log('ここです。');
}

/*
for (let i = 0; i < inner.length; i++) {
            function change() {
                if(inner[i].classList.contains('is-pressed')){
                    inner[i].classList.remove('is-pressed');
                }else{
                    inner[i].classList.add('is-pressed');
                }
            }
    inner[i].addEventListener("click", change);
    console.log('ここです。');
}
*/
}