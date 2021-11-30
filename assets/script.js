var allImages = $("img");
var currentImage = 0;

function changeImage() {
    $(allImages[currentImage]).fadeOut(200, function() {
        
        if(currentImage == allImages.length - 1){
            currentImage = 0
        } else {
            currentImage++;
        }
    
        $(allImages[currentImage]).fadeIn(200);

    });


};

var imageTimer = setInterval(changeImage, 4000);
