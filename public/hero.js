let bg = document.getElementById("bg");
let sun = document.getElementById("sun");
let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");
let m4 = document.getElementById("m4");
let m5 = document.getElementById("m5");
let m6 = document.getElementById("m6");
let text = document.getElementById("text");
let light = document.getElementById("light");

console.log("ciao");

window.addEventListener("scroll", function(){
    var value = window.scrollY;

    this.bg.style.top = value * 0.5 + 'px';
    this.sun.style.top = -value * 0.05 + 'px';
    this.m1.style.top = value * 0.5 + 'px';
    this.m2.style.top = value * 0.5 + 'px';
    this.m3.style.top = value * 0.15 + 'px';
    this.m4.style.top = -value * 0.01 + 'px';
    this.m5.style.top = value * 0.15 + 'px';
    this.m6.style.top = value * 0.05 + 'px';
    this.light.style.top = -value * 0.05 + 'px';
    this.text.style.top = value * 0.15 + 'px';
  

});