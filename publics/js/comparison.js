var img1 = document.querySelector('#home>img');
var img2 = document.querySelector('#sample>img');
checkButton.addEventListener('click', function(){
    resemble(canvasImg.toDataURL()).compareTo(img2.src).ignoreColors().onComplete(function(data){
        console.log(data);
        alert('Процент разности картинок ' + data.misMatchPercentage);
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
