angular.module('app.service.itemdetails', [])

.service('DetalhesItem', function ($q) {
    var item;
  

    var setitem = function (newObj) {
        item = newObj;
        
    };
    
    var getItem = function () {
            var deferred = $q.defer();
            var query = new CB.CloudQuery("Cerveja");
            query.include('marca');
            query.include('cervejaria');
            query.include('companhia');
            query.include('volume');
            query.include('familia');
            query.include('teor');
            query.include('sku');
            query.include('origem');
            query.include('origem.bandeira');
            query.include('imagem');
            query.findById(item, {
                success: function (obj) {
                    //obj an instance of CloudObject
                    deferred.resolve(CB.toJSON(obj));
                },
                error: function (err) {
                    //Error in retrieving the data.
                }
            });
            return deferred.promise;
        

    };

    return {
        setitem: setitem,
        getItem: getItem
    };

})