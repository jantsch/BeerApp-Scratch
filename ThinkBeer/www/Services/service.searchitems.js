angular.module('app.service.searchitems', [])

.service('SearchItems', function ($q) {
    var skip = 0;

    var initQuery = function () {
        var deferred = $q.defer();
        var query = new CB.CloudQuery("Cerveja");
        query.include('marca');
        query.include('imagem');
        query.include('origem');
        query.include('origem.bandeira');
        //query.setSkip(loadFrom);
        query.orderByAsc('nome');
        query.setSkip(skip);
        query.selectColumn(['id', 'nome', 'marca', 'imagem', 'origem']);
        query.find({
            success: function (list) {
                //list is an array of CloudObjects
                deferred.resolve(CB.toJSON(list));               
                //$scope.$apply();
            },
            error: function (err) {
                //Error in retrieving the data.
            }
        });
        skip += 10;

        return deferred.promise;

    };

    var queryWith = function (searchName) {
        var defer = $q.defer();
        
        var query = new CB.CloudQuery('Cerveja');
        query.substring('nome', searchName,true);
        query.include('marca');
        query.include('imagem');
        query.include('origem');
        query.include('origem.bandeira');
        query.setSkip(skip);
        //or
        //query.substring(['nome', 'ColName2'], 'Text');
        ////or
        //query.substring('ColName', ['Text1', 'Text2']);
        ////or      
        //query.substring(['ColName1', 'ColName2'], ['Text1', 'Text2'])        
        
        query.find({
            success: function (list) {
                //list is an array of relevant CloudObjects    
                defer.resolve(CB.toJSON(list));
            },
            error: function (error) {
                //error
                defer.reject(CB.toJSON(list));
            }
        });
        skip += 10;
        return defer.promise;
    };

    var resetSkip = function () { skip = 0;}
    return {
        initQuery: initQuery,
        queryWith: queryWith,
        resetSkip: resetSkip
    };
});