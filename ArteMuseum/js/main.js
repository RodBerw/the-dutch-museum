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
        headerTab.style.transform = "translateX(400px)";
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

    //Set section element content
    if(pageScroll <= 100){

        if(sectionLevel != 1){
            sectionValue = "HOME";
            sectionLevel = 1;
            section.style.opacity = 0;
            setTimeout(resetOpacity, 250);
        }
    }else if(pageScroll > 100){

        if(sectionLevel != 2){
            sectionValue = "ABOUT";
            sectionLevel = 2;
            section.style.opacity = 0;
            setTimeout(resetOpacity, 250);
        }
    }

}, {passive:true});

function resetOpacity(){
    if(getComputedStyle(section).opacity == 0){
        section.style.opacity = 1;
        section.innerHTML = sectionValue;
    }
}