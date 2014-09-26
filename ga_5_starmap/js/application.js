var starsHorizontal = [10, 50, 56, 27, 209, 306, 17, 98, 406];
var starsVertical = [12, 77, 66, 88, 150, 200, 10, 700, 505];

function buildStars() {
    var stars = "";
    for (var i = 0; i < starsHorizontal.length; i++) {
        var starLeft = starsHorizontal[i];
        var starTop = starsVertical[i];
        var startHTML = "<div class='star' style='left:";
        var middleHTML = "px; top:";
        var endHTML = "px;'></div>";

        stars += (startHTML + starLeft + middleHTML + starTop + endHTML);

    }

    document.getElementById('nightsky').innerHTML = stars;

}

buildStars();