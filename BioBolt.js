
/* const bioBtn = document.querySelector("[data-bio]");   
const AboutBtn = document.querySelector("[data-ab]");   
const ServiceBtn = document.querySelector("[data-ser]");   
const proBtn = document.querySelector("[data-pro]");   
const orderBtn = document.querySelector("[data-or]");   
const contactBtn = document.querySelector("[data-con]");   */ 
const buttons = document.querySelectorAll("a.links");

function loadPage(loadUrl){
    fetch(loadUrl)
    .then(res => res.text())
    .then(res =>{
        document.getElementById('ajaxcontent').innerHTML = res;
    })
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const url = button.dataset.url;
        loadPage(url)
        document.getElementsByClassName('slogen')[0].style.display="none";
    })
})