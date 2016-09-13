angular.module('app.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



        .state('tabsController.beerPedia', {
            url: '/beerpedia',
            views: {
                'tab1': {
                    templateUrl: 'Views/beerPedia.html',
                    controller: 'beerPediaCtrl'
                }
            }
        })

    .state('tabsController.beerCamera', {
        cache: false,
        url: '/beercamera',
        views: {
            'tab2': {
                templateUrl: 'Views/beerCamera.html',
                controller: 'beerCameraCtrl'
            }
        }
    })

    .state('tabsController.beerSocial', {
        url: '/beerSocial',
        views: {
            'tab3': {
                templateUrl: 'Views/beerSocial.html',
                controller: 'beerSocialCtrl'
            }
        }
    })

    .state('tabsController', {
        url: '/tabsController',
        templateUrl: 'Views/tabsController.html',
        abstract: true
    })

    .state('login', {
        url: '/login',
        templateUrl: 'Views/login.html',
        controller: 'loginCtrl'
    })

    .state('detalhes', {
        cache: false,
        url: '/detalhes',
        templateUrl: 'Views/detalhes.html',
        controller: 'detalhesCtrl'
    })

    .state('sigIn', {
        url: '/signin',
        templateUrl: 'Views/sigIn.html',
        controller: 'sigInCtrl'
    })

    .state('signup', {
        url: '/signup',
        templateUrl: 'Views/signup.html',
        controller: 'signupCtrl'
    })

    .state('load', {
        url: '/load',
        templateUrl: 'Views/load.html',
        controller: 'loadCtrl'
    })

    $urlRouterProvider.otherwise('/load')



});