// typing animation
const typedTextSpan=document.querySelector(".typed-text"); 

const textArray=["Frontend Web Developer"];
const typingDelay=200;
const newTextDelay=1000;
let textArrayIndex=0;
let charIndex=0;

function type(){
    if (charIndex < textArray[textArrayIndex].length){
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
    //     setTiemout(erase, newTextDelay);
    }
}
document.addEventListener("DOMContentLoaded",function(){
    setTimeout(type, newTextDelay + 200);
});

//typing animation end


// NAVBAR

const navToggler = document.querySelector(".topnav");
navToggler.addEventListener("click",()=>{
    hidesection();
    toggleNavbar();
})

function hidesection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".topnav").classList.toggle("active");
}

// active section

document.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hidesection();
            document.body.classList.add("hide-scrolling");

        }

        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
        },500);
    }

});


