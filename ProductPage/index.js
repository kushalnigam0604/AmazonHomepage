var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");
var p3 = document.getElementById("p3");

var mp6 = document.getElementById("mp6");

p1.addEventListener("mouseover",function(){
    mp6.attributes[1].textContent = p1.attributes[1].textContent;
});
p2.addEventListener("mouseover",function(){
    mp6.attributes[1].textContent = p2.attributes[1].textContent;
});
p4.addEventListener("mouseover",function(){
    mp6.attributes[1].textContent = p4.attributes[1].textContent;
});
p5.addEventListener("mouseover",function(){
    mp6.attributes[1].textContent = p5.attributes[1].textContent;
});
p6.addEventListener("mouseover",function(){
    mp6.attributes[1].textContent = p6.attributes[1].textContent;
});
p7.addEventListener("mouseover",function(){
    mp6.attributes[1].textContent = p7.attributes[1].textContent;
});
p3.addEventListener("mouseover",function(){
    mp6.attributes[1].textContent = p3.attributes[1].textContent;
});