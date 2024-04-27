


document.getElementById("start").onclick= function(){
let age=document.getElementById("age").value;
let weight=document.getElementById("weight").value;


localStorage.setItem('age',age);
localStorage.setItem('weight',weight);}
