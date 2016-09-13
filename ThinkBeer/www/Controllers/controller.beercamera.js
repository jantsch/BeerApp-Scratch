angular.module('app.controller.beercamera', [])
.controller('beerCameraCtrl', function ($scope,$state, $cordovaBarcodeScanner,SearchBarCode) {  


    $cordovaBarcodeScanner
      .scan()
      .then(function (barcodeData) {
          if (barcodeData.text != "") {
              SearchBarCode.findBeer(barcodeData.text).then(function () {
                  $state.go('detalhes');
              });
          }
          // Success! Barcode data is here
      }, function (error) {
          // An error occurred
      });


});