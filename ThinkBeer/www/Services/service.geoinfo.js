angular.module('app.service.geoinfo', [])

.service('GeoInfo', function () {
    // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
    var setGeo = function (geo_data_lat, geo_data_long) {
        window.localStorage.geo_position_info = JSON.stringify(geo_data_lat, geo_data_long);
    };

    var getGeo = function () {
        return JSON.parse(window.localStorage.geo_position_info || '{}');
    };

    return {
        getGeo: getGeo,
        setGeo: setGeo
    };
});