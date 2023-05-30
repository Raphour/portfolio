
function changeImage(element) {
    var image = element.querySelector("img");
    var nouvelleImage = " ./assets/menu_button_hover.png";
    image.src = nouvelleImage;
}


function resetImage(element) {
    var image = element.querySelector("img");
    var nouvelleImage = " ./assets/menu_button.png";
    image.src = nouvelleImage;
}

function changeImageMenu(sourceImage){
    document.getElementById("imageMenu").src = sourceImage;
    
}

function resetImageMenu(){
    document.getElementById("imageMenu").src = " ./assets/boxe.png";
}


function resetSideImage(id,sourceImage){
    document.getElementById(id).src = sourceImage;
    
}
function changeSideImage(id,sourceImage){
    document.getElementById(id).src = sourceImage;
}
    


window.onload = function () {
    document.getElementById("ImageMenu").src = " ./assets/boxe.png";}
