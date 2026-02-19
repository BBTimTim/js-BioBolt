const buttons = document.querySelectorAll("a.links");

function loadPage(loadUrl){
    fetch(loadUrl)
    .then(res => res.text())
    .then(res =>{
        document.getElementById('ajaxcontent').innerHTML = res;
    })
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const url = button.dataset.url;
        loadPage(url)
        document.getElementsByClassName('slogen')[0].style.display="block";
    })
})