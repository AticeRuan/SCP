//door open effect
let smokeLeft=document.getElementById("smoke_left");
let smokeRight=document.getElementById("smoke_right")
let logo=document.getElementById("intro_logo")
let logoBack=document.getElementById("intro_logo_back")
let buildingBack=document.getElementById("building_back")
let buildingFront=document.getElementById("building_front")
let slogan=document.getElementById("slogan")
let button=document.getElementById("btn") 

window.addEventListener("scroll",function()
{   let value=window.scrollY;
    smokeLeft.style.left=-value * 1+"px";
    smokeRight.style.left=value * 1 +"px";
    smokeRight.style.top=value * 0.025+"px";
    buildingBack.style.left=-value * 1+"px";
    buildingFront.style.right=-value * 1 +"px";

    logo.style.top=(value+100) * 0.1+"vh";
    logoBack.style.top=(value+100) * 0.1+"vh";
    
 })
 
 button.addEventListener("mouseover",function()
 {
    button.textContent="Access"
    button.style.color="Green"
 })

 button.addEventListener("mouseleave",function()
 {
    button.textContent="Warning!"
    button.style.color="Red"
 })


