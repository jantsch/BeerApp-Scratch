// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ngCordova',
    'app.controller.beerPedia',
    'app.controller.signup',
    'app.controller.signin',
    'app.controller.login',
    'app.controller.beercamera',
    'app.controller.beersocial',
    'app.controller.detalhes',
    'app.controller.load',
    'app.service.itemdetails',
    'app.service.searchitems',
    'app.service.userinfo',
    'app.service.geoinfo',
    'app.service.searchbarcode',
    'app.directive.blank',
    'app.routes'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        var appId = "rywghawbioih"; //This should be your AppID
        var appKey = "b78392a8-26fb-4743-98f1-e98f736e3eff"; //this should be your AppKey
        CB.CloudApp.init(appId, appKey);
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})