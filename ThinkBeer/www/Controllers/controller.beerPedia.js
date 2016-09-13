angular.module('app.controller.beerPedia', [])
.controller('beerPediaCtrl', function ($scope, $state, DetalhesItem,SearchItems) {
    var tamMinimodePesquisa = 3;
    var contentDefaultDisplayed = true;
    var haveMoreItems = true;

    SearchItems.initQuery().then(function (list) { $scope.beers = list; })
    
    $scope.newSearch = function (searchname)
    {
        if (searchname.length >= tamMinimodePesquisa) {
            SearchItems.resetSkip();
            SearchItems.queryWith(searchname).then(function (list) { $scope.beers = list; });
            contentDefaultDisplayed = false;
            haveMoreItems = true;
            
        }
        else if (searchname.length == 0) {
            SearchItems.resetSkip();
            SearchItems.initQuery().then(function (list) { 
                $scope.beers = list;
                haveMoreItems = true;
                contentDefaultDisplayed = true;
            })
        }
    };

    $scope.loadMore = function () {     

        if (contentDefaultDisplayed == false) {
           
           SearchItems.queryWith(searchname).then(function (list) {
               if (list.length < 10)
                   haveMoreItems = false;

               $scope.beers = $scope.beers.concat(list);
           });
           contentDefaultDisplayed = false;
       }
       else
       {
           SearchItems.initQuery().then(function (list) {
               if (list.length < 10)
                   haveMoreItems = false;

               $scope.beers = $scope.beers.concat(list);
           });

       }
       $scope.$broadcast('scroll.infiniteScrollComplete');
    };

    $scope.shouldILoad = function () {
    
        return  haveMoreItems;        
    };


    $scope.openDetails = function (id) {
        DetalhesItem.setitem(id);
        $state.go('detalhes');

    }

});
