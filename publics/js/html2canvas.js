var resultScreen = document.getElementById('result');
var diffScreen = document.getElementById('difference');
checkButton.addEventListener("click", function () {
    html2canvas(resultScreen, {
        onrendered: function(canvas) {
            diffScreen.appendChild(canvas);
            canvasImg = canvas;
        }
    });
});
