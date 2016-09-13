angular.module('app.controller.signup', [])

.controller('signupCtrl', function ($scope) {
    $scope.formModel = {};


    $scope.onSignedIn = function (valid) {

        if (valid) {
            var user = new CB.CloudUser();
            user.set('username', $scope.formModel.username);
            user.set('password', $scope.formModel.password);
            user.set('email', $scope.formModel.email);
            user.signUp({
                success: function (user) {
                    //Registration successfull
                    console.log(user);
                },
                error: function (error) {
                    console.log(error);
                    //Error in user registration.
                }
            });
        }
        else {
            console.log("Invalid Form!")
        }
    }
});