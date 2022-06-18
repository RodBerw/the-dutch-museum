//--- TAB MENU -------------------------------

var hidden = true;

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



//--- SECTION ELEMENT ---------------------------

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


//