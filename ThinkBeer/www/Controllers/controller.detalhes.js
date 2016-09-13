angular.module('app.controller.detalhes', [])
.controller('detalhesCtrl', function ($scope, DetalhesItem) {
    DetalhesItem.getItem().then(function(result)
    {
        $scope.beer = result;
    })
});