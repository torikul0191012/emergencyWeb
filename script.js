// Love Counter // 
let love = document.getElementById('heartCount').innerText
let loveIcon = document.getElementsByClassName('heart-icon')

for (let icon of loveIcon){
    icon.addEventListener("click",function(){
     
    love = parseInt(love) + 1; 
    document.getElementById('heartCount').innerText = love; 
    });
}

