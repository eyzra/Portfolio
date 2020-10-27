AOS.init()

var lightIcon = document.querySelector(".fa-sun");
var darkIcon = document.querySelector(".fa-moon");
var body = document.querySelector('body')
var headText = document.querySelector('.about-title h1')
var logo = document.querySelector('.logo')

darkIcon.addEventListener("click", darkMode)

function lightMode(){
    lightIcon.setAttribute("style", "visibility: hidden")
    darkIcon.setAttribute("style", "visibility: visible")
    body.setAttribute("style", "background-color: rgba(253, 182, 155, 0.76); color: black;");
    headText.setAttribute("style", "color:black;");
    logo.setAttribute("style", "background-image: linear-gradient(red 0%, coral 25%,brown 50%, deeppink 100%); background-repeat: repeat; -webkit-background-clip: text;  -webkit-text-fill-color: transparent; ")
}

function darkMode(){
    darkIcon.setAttribute("style", "visibility: hidden")
    lightIcon.setAttribute("style", "visibility: visible")
    body.removeAttribute("style");
    headText.removeAttribute("style");
    logo.removeAttribute("style");
}


