## Ques 01 : What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
**Answer  :**

    getElementById("idName")            -- একটি id দিয়ে নির্দিষ্ট একটি এলিমেন্টকে ধরে। সবসময় ইউনিক হয়। একই নামের একাধিক আইডি থাকা যায় না। 
    getElementsByClassName("className") -- একটি নির্দিষ্ট class নামের সব এলিমেন্টকে ধরে। এটি htmlCollection রিটার্ন করে। 
    রিটার্ন array-এর মতো কিন্তু একদম array না।
    querySelector("selector")           -- CSS selector ব্যবহার করে প্রথম যে এলিমেন্ট মিলে যাবে সেটি ফেরত দেয়। 
    যেমন: document.querySelector(".btn") মানে .btn ক্লাসের প্রথম এলিমেন্ট।
    querySelectorAll("selector")        -- CSS selector ব্যবহার করে সব এলিমেন্টকে NodeList আকারে ফেরত দেয়।
    যেমন: document.querySelectorAll(".btn") মানে .btn ক্লাসের সব এলিমেন্ট।


## Ques 02 : How do you create and insert a new element into the DOM?
**Answer  :**

    const newPara = document.createElement("p");        এলিমেন্ট নিলাম
    newPara.textContent = "New Paragraph";              এলিমেন্টে যা থাকবে 
    const container = document.getElementById("myDiv"); এলিমেন্ট কে বক্সে ডুকাই
    container.appendChild(newPara);                     বক্সে নতুন এলিমেন্ট এর আংটা লাগাই 


## Ques 03 : What is Event Bubbling and how does it work?
**Answer  :** 

    Event Bubbling -- যখন কোনো child element-এ ইভেন্ট click করলে , সেই ইভেন্ট প্রথমে child থেকে শুরু হয়ে তার parent, grandparent হয়ে document পর্যন্ত উঠে যায়। একে বলে event bubbling।
    Work Process -- যদি button → div → body এর ভেতরে থাকে। তাহলে button এ click করলে প্রথমে button-এর ইভেন্ট ট্রিগার হবে, তারপর div, তারপর body।


## Ques 04 : What is Event Delegation in JavaScript? Why is it useful?
**Answer  :** 

    Event Delegation হলো একটি টেকনিক যেখানে আমরা parent element এ event listener দিই,তারপর event bubbling-এর মাধ্যমে কোন child-এ ইভেন্ট ঘটেছে তা ধরে ফেলি।
    এটি useful, কারণ: অনেক child element-এর জন্য আলাদা আলাদা ইভেন্ট লিসেনার না দিয়ে parent-এ একটাই লিসেনার দিলেই চলে।


## Ques 05 : What is the difference between preventDefault() and stopPropagation() methods?
**Answer  :**

    preventDefault()    -- কোনো HTML element-এর default behavior বন্ধ করে। যেমন: 1. ফর্ম সাবমিট করলে পেজ রিফ্রেশ হওয়া বন্ধ করা। 2. লিঙ্কে ক্লিক করলে অন্য পেজে না যাওয়া।
    stopPropagation()   -- ইভেন্ট bubbling থামিয়ে দেয়। মানে child-এ ইভেন্ট হলে তা parent-এর কাছে যাবে না।

    
    