var tabLinks = document.getElementsByClassName("liste-links");

var tabContent = document.getElementsByClassName("content-competences");

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