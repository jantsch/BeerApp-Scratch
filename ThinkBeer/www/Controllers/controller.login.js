angular.module('app.controller.login', [])
.controller('loginCtrl', function ($scope) {

    $scope.login_withoth_provider = function () {
        var user = new CB.CloudUser();
        user.set('username', this.username);
        user.set('password', this.password);
        user.logIn({
            success: function (user) {
                //Login successfull
                console.log(user);
            },
            error: function (error) {
                //Error.
                console.log(error);
            }
        });

    }
});