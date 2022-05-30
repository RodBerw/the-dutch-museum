let banner = document.getElementsByClassName("banner")[0];
let app = new PIXI.Application({ width: 1920, height: 890 });
banner.prepend(app.view);
var appElement = banner.firstChild;
appElement.id = "banner-img";

let banner_img = new PIXI.Sprite.from("../images/imgs/banner-img.jpg");
app.stage.addChild(banner_img);

let banner_img_depthMap = new PIXI.Sprite.from("../images/imgs/banner-img-depthMap.jpg");
app.stage.addChild(banner_img_depthMap);

displacementFilter = new PIXI.filters.DisplacementFilter(banner_img_depthMap)
app.stage.filters = [displacementFilter];



window.onmousemove = function(e){
    //console.log(e);
    displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 30;
    displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 30;
}


// var scaleX = lerp(displacementFilter.scale.x,(window.innerWidth / 2 - e.clientX) / 40, 1);
// console.log(scaleX);
