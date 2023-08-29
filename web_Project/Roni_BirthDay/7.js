// ------------Gift Box 1 Start Here------------
var giftImage1 = document.createElement("img");
var src1 = document.getElementById("present");

// gift box
giftImage1.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png";

// For middle Gap in Image
giftImage1.style.margin = "10px";

//appent child
src1.appendChild(giftImage1);


//After Clicked open This surprise
giftImage1.addEventListener('click', function () {
    giftImage1.src = "https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif";
})
// ------------Gift Box 1 End Here------------

//Title change
var allImage = giftImage1 && giftImage2 && giftImage3 && giftImage4 && giftImage5;
allImage.addEventListener('click', function () {
    var mainTitle = document.getElementById("title");
    mainTitle.innerHTML = "Enjoy your present!";
})