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
const call =  document.getElementsByClassName('call-btn')
let coinCount = parseInt(document.getElementById('coin-count').innerText)

for ( const btn of call ){
    btn.addEventListener("click",function(){

    const card = btn.parentNode.parentNode
    const serviceName = card.querySelector("h1").innerText
    const serviceNumber = parseInt(card.querySelector(".service-number").innerText)
        
    if(coinCount >=20){
        alert( serviceName + " ।। " + "Hotline" +" - "+ serviceNumber + " ।। " + "20 coin will be charge for each call ")
        coinCount = coinCount - 20
        document.getElementById('coin-count').innerText = coinCount

// Call History Section //
    const callHistory = document.getElementById('call-history');  
    const timeNow = new Date().toLocaleTimeString();                                    //For Time
//Add History
    const historyItem = document.createElement("div");
            historyItem.className = "p-2 border-b flex justify-between items-center";  //for style
            historyItem.innerHTML = `
                <div>
                    <p class="font-semibold">${serviceName}</p>
                    <p class="text-sm text-gray-500">${serviceNumber}</p>
                </div>
                <span class="text-xs text-gray-400">${timeNow}</span>
            `;
// Call history তে append /prepend 
            callHistory.prepend(historyItem);
// Clear Button 
            const clearBtn = document.getElementById('clear-history');
            clearBtn.addEventListener("click", function () {
            callHistory.innerHTML = "";  
});
    }    
    else{
         alert("You don't have enough coin")
    }    

})}

//copy number
const copyCount = parseInt(document.getElementById('copyCount').innerText) 
document.addEventListener("click", (e) => {
  if (e.target.closest(".copy-btn")) {
    const card = e.target.closest(".card");
    const number = card.querySelector(".service-number").textContent.trim();
    navigator.clipboard.writeText(number).then(() => {
      e.target.closest(".copy-btn").textContent = "Copied!";
      setTimeout(() => {
        e.target.closest(".copy-btn").innerHTML = '<i class="fa-regular fa-clone"></i> Copy';

 // কপি কাউন্ট বাড়ানো
        const countEl = document.getElementById('copyCount');
        let current = parseInt(countEl.innerText) || 0;
        countEl.innerText = current + 1;
        coinCount = copyCount + 1
        copyCount.innerText = copyCount

      }, 1500);
    });
  }
});
//Bangla Version
document.getElementById("langBtn").addEventListener("click", () => {
  window.location.href = "index.html";  
})



