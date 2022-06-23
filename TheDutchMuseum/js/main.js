//--- TAB MENU -------------------------------

var hidden = true;


//Get started button

function getStarted(){
    window.scroll(0, 900);
}

//Toggle menu visibility
function toggleMenuTab(){

    var headerTab = document.getElementById("header-tab");
    var menuItem = document.getElementById("nav-menu-item-img");

    if(hidden == true){
        headerTab.style.transform = "translateX(0)";
        menuItem.style.transform = "rotate(-90deg)";
        hidden = false;
    }
    else{
        headerTab.style.transform = "translateX(100%)";
        menuItem.style.transform = "rotate(0)";
        hidden = true;
    }
}



//--- SCROLL FUNCTION ---------------------------

var pageScroll;
var sectionLevel = 1;
var sectionValue;

//Detect page vertical scroll
window.addEventListener("scroll", function(){
    pageScroll = window.scrollY;
    var section = document.getElementById("section");
    var background = this.document.getElementById("background-img");
    var aboutTextBlock = document.getElementById("about-text-block");

    //Set section element content
    if(pageScroll <= 100){

        if(sectionLevel != 1){
            sectionValue = "HOME";
            sectionLevel = 1;
            section.style.opacity = 0;
            setTimeout(resetOpacity, 250);
        }
    }else if(pageScroll > 100 && pageScroll < 1600){

        if(sectionLevel != 2){
            sectionValue = "ABOUT";
            sectionLevel = 2;
            section.style.opacity = 0;
            setTimeout(resetOpacity, 250);
        }
    }else if(pageScroll >= 1800){

        if(sectionLevel != 3){
            sectionValue = "SEARCH BY";
            sectionLevel = 3;
            section.style.opacity = 0;
            setTimeout(resetOpacity, 250);
        }
    }

    console.log(pageScroll);

    //Set background brightness
    var bgB = ((pageScroll - 1000) * 50) / 1000;
    var bgBF = Math.min(Math.max(bgB,0), 50);
    background.style.filter = `brightness(${100 - bgBF}%)`;

    //Set about text block scale
    var aTBx = ((pageScroll - 1000) * 15) / 1000;
    var aTBxF = Math.min(Math.max(aTBx,0), 7.5);
    aboutTextBlock.style.padding = `0 ${(aTBxF)}% 0 ${(aTBxF)}%`;
    aboutTextBlock.style.margin = "auto";

}, {passive:true});

function resetOpacity(){
    if(getComputedStyle(section).opacity == 0){
        section.style.opacity = 1;
        section.innerHTML = sectionValue;
    }
}


//--- SEARCH BY ---------------------

var sItemInterval;
var currentElement;
function sItemEnter(element){
    element.children[0].style.transform = "scale(1.1)";
    element.addEventListener("mousemove", sItemMove);
    currentElement = element;
}

function sItemLeave(element){
    element.children[0].style.transform = "scale(1)";
    element.children[1].style.transform = "scale(1)";
    element.children[1].style.transform = "translate(0,0)";
}

function sItemMove(mouse){
    console.log(mouse.movementX);
    currentElement.children[1].style.transform = `scale(1.05) translate(${-mouse.movementX * 2}px,${-mouse.movementY * 2}px)`;
}