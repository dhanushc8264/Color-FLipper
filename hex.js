const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


document.querySelector("button").addEventListener("click",function(){
    var hexCode = "#"
    
    for(var i=0;i<6;i++)
    {
        var RandomNumber = Math.floor(Math.random()*15);
        hexCode += hex[RandomNumber];
    }

    document.body.style.backgroundColor = hexCode;
    document.getElementsByClassName("color")[0].textContent = hexCode;
})