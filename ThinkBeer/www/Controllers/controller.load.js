angular.module('app.controller.load', [])
.controller('loadCtrl', function ($scope, $state, UserInfo, $ionicPlatform, $cordovaGeolocation, GeoInfo, $ionicHistory) {

    $ionicPlatform.ready(function () {

        // Posição Atual
        var posOptions = { timeout: 10000, enableHighAccuracy: false };
        $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
        GeoInfo.setGeo(position.coords.latitude, position.coords.longitude);
    }, function (err) {
        // error
    });

        // elimina histórico
        $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true
        });
        // Vê se usuário está logado
        if (UserInfo.getUser()!=null)
            $state.go('tabsController.beerPedia');
        else
             $state.go('sigIn');
    })



});