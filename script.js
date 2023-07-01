let displayText = document.getElementById("display-text");
let whiteFlexBox=document.querySelector(".flex-box2");

whiteFlexBox.addEventListener("click",()=>{
    // displayText.style.display="block";
    if(displayText.style.display==="none"){
        displayText.style.display="block";
    }
    else{
        displayText.style.display="none";
    }
    
})