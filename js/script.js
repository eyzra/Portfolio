var lightIcon = document.querySelector(".fa-sun");
var darkIcon = document.querySelector(".fa-moon");
var body = document.querySelector('body')
var headText = document.querySelector('.about-title h1')
var nav = document.querySelector('nav ul')
var logo = document.querySelectorAll('.dev-icon')

darkIcon.addEventListener("click", darkMode)

function lightMode(){
    lightIcon.setAttribute("style", "visibility: hidden")
    darkIcon.setAttribute("style", "visibility: visible")
    body.setAttribute("style", "background-color: #ffe; color: black;");
    headText.setAttribute("style", "color:black;");

    // for(let i = 0; i < logo.length; i++){
    //     logo.setAttribute("style", "color: darkblue");
    // }
}

function darkMode(){
    darkIcon.setAttribute("style", "visibility: hidden")
    lightIcon.setAttribute("style", "visibility: visible")
    body.removeAttribute("style");
}


