let tabLinks = document.getElementsByClassName("liste-links");
let menuIcon = document.getElementById("menuicon");
let closeMenu = document.getElementById("close");
let menuUl = document.getElementsByClassName("menu-ul");
let tabContent = document.getElementsByClassName("content-competences");

function tabopen(event, tabName){
    for(tab of tabLinks){
        tab.classList.remove("active-link");
    }

    for(content of tabContent){
        content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")
}

function menuOpen(){
    menuUl[0].style.right = "0";
}

function menuClose(){
    menuUl[0].style.right = "-200px";
}

