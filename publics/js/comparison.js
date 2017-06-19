var img1 = document.querySelector('#home>img');
var img2 = document.querySelector('#sample>img');
var diffImg;
var goggi = document.getElementById('goggi');
resemble.outputSettings({
    errorColor: {
        red: 255,
        green: 0,
        blue: 255
    },
    errorType: 'movement',
    transparency: 0.3,
    largeImageThreshold: 1200,
    useCrossOrigin: false
});
checkButton.addEventListener('click', function(){
     diffImg = resemble(canvasImg.toDataURL()).compareTo(img2.src).ignoreColors().onComplete(function(data){
        console.log(data);
        alert('Процент разности картинок ' + data.misMatchPercentage);
        goggi.html(diffImg) ;
        /*
         {
         misMatchPercentage : 100, // %
         isSameDimensions: true, // or false
         dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
         getImageDataUrl: function(){}
         }
         */
    });
});




