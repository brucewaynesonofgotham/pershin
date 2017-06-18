var theory = document.getElementById('theory');
var resultScreen = document.getElementById('result');
var homeScreen = document.getElementById('home');
theory.onclick = function () {
    html2canvas(resultScreen, {
        onrendered: function(canvas) {
            homeScreen.appendChild(canvas);
        }
    });
}
