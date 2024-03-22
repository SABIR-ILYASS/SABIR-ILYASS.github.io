const scriptURL="https://script.google.com/macros/s/AKfycbxSNGDaBYX_UPTFALF3qhrK14Eb-_zMC1oQhgwIsv2Xm-I-BZnl6lU2_ks0WLfEWXIj/exec";const form=document.forms["submit-to-google-sheet"];const msg=document.getElementById("msg");form.addEventListener("submit",(e)=>{e.preventDefault();fetch(scriptURL,{method:"POST",body:new FormData(form)}).then((response)=>{msg.innerHTML="Message sent successfully.";setTimeout(function(){msg.innerHTML=""},5000);form.reset()}).catch((error)=>console.error("Error!",error.message))});const projectElements=document.querySelectorAll(".proj");let currentGroup=0;function showCurrentGroup(){projectElements.forEach((element)=>{element.style.display="none"});let screenWidth=window.innerWidth;let projectsToShow=3;if(screenWidth<=850){projectsToShow=2}
if(screenWidth<=650){projectsToShow=1}
for(let i=currentGroup;i<currentGroup+projectsToShow;i++){let index=i%projectElements.length;projectElements[index].style.display="block"}}
function showNextGroup(){currentGroup++;showCurrentGroup()}
function showPreviousGroup(){currentGroup--;if(currentGroup<0){currentGroup=projectElements.length-1}
showCurrentGroup()}
showCurrentGroup();var sidemeu=document.getElementById("sidemenu");function openmenu(){sidemeu.style.right="50px"}function closemenu(){sidemeu.style.display="none"}var tablinks=document.getElementsByClassName("links"),tabcontents=document.getElementsByClassName("tab-contents");function opentab(e){for(tablink of tablinks)tablink.classList.remove("active-link");for(tabcontent of tabcontents)tabcontent.classList.remove("active-tab");event.currentTarget.classList.add("active-link"),document.getElementById(e).classList.add("active-tab")}
const booksElements=document.querySelectorAll(".book");let currentbook=0;function showCurrentbook(){booksElements.forEach(e=>{e.style.display="none"});let e=window.innerWidth;let t=3;if(e<850){t=2}
if(e<650){t=1}
for(let o=currentbook;o<currentbook+t;o++){let r=o%booksElements.length;booksElements[r].style.display="block"}}
function showNextbook(){currentbook++;showCurrentbook()}
function showPreviousbook(){--currentbook<0&&(currentbook=booksElements.length-1);showCurrentbook()}
showCurrentbook()