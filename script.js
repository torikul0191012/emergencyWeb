// Love Counter // 
let love = document.getElementById('heartCount').innerText
let loveIcon = document.getElementsByClassName('heart-icon')

for (let icon of loveIcon){
    icon.addEventListener("click",function(){
     
    love = parseInt(love) + 1; 
    document.getElementById('heartCount').innerText = love; 
    });
}

// Call Alert //
const call = document.getElementsByClassName('call-btn')
const number = document.getElementsByClassName('service-number')
let coinCount = parseInt(document.getElementById('coin-count').innerText)

for ( const btn of call ){
    btn.addEventListener("click",function(){

    const card = btn.parentNode.parentNode
    const serviceName = card.querySelector("h1").innerText
    const serviceNumber = card.querySelector(".service-number").innerText
        
    if(coinCount >=20){
        alert( serviceName + " ।। " + "হটলাইন নাম্বার" +" - "+ serviceNumber)
        coinCount = coinCount - 20
        document.getElementById('coin-count').innerText = coinCount
    }    
    else{
         alert("আপনার কাছে পর্যাপ্ত কয়েন নেই!")
    }    
})}


