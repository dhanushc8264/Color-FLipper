const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//A  random number generator between 0 and 3







document.querySelector("button").addEventListener("click",function(){
    var RandomNumber = Math.floor(Math.random()*4); 
    document.body.style.backgroundColor = colors[RandomNumber];
    document.getElementsByClassName("color")[0].textContent = colors[RandomNumber];
});