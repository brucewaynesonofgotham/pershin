var resultScreen = document.getElementById('result');
var img2 = document.querySelector('#sample>img');
var diffImg = new Image();
var difference = document.getElementById('difference');
var barValue = document.getElementById('progressbar');


//Целочисленное деление
function div(val, by){
    return (val - val % by);
}
//Переменная для хранения значения схожести картинок
var diffValue;
checkButton.addEventListener("click", function () {
    html2canvas(resultScreen, {
        onrendered: function(canvas) {
            canvasImg = canvas;
            resemble(canvasImg.toDataURL()).compareTo(img2.src).onComplete(function(data){
                console.log(data);
                diffValue = data.misMatchPercentage;
                diffImg.src = data.getImageDataUrl();
                difference.appendChild(diffImg);
                diffValue = 100 - diffValue;
                /*barValue.style.width = '90%';
                 barValue.style.backgroundColor = 'red';*/
                if (diffValue < 40){
                    barValue.style.backgroundColor = 'red';
                }else if(diffValue < 90){
                    barValue.style.backgroundColor = 'orange';
                }else{
                    barValue.style.backgroundColor = 'green';
                }
                barValue.style.width = diffValue + '%';
                barValue.innerHTML = diffValue + '% Complete';
                barValue.classList.add('progress-bar-striped');
            });
        }
    });
});
