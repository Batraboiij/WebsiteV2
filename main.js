

var gswpic = [
    "winn.jpg","winning.jpg","winninglike.jpeg","rawImage.jpg"
];
var number = 0
function basketball() {
    document.getElementById("gsw").src=gswpic[number];
    number++

    if (number == 4) {
        number = 0;
    }
}

