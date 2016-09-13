angular.module('app.service.searchbarcode', [])

.service('SearchBarCode', function ($q, DetalhesItem) {
    var item;

    var findBeer = function (item) {
        var deferred = $q.defer();
        var query = new CB.CloudQuery("CodigoDeBarra");
        query.equalTo('numero',item);
        query.find({
            success: function (obj) {
                //obj an instance of CloudObject
                CB.toJSON(obj);
                deferred.resolve(DetalhesItem.setitem(obj[0].cerveja._id));
              
            },
            error: function (err) {
                //Error in retrieving the data.
            }
        });
        return deferred.promise;
    };

       

    return {
        findBeer: findBeer
       
    };

})