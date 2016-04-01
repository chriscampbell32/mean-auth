angular.module('myApp').factory('AuthService',
    ['$q', '$timeout', '$http',
    function ($q, $timeout, $http){
        //create user variable
        var user = null;

        //return available functions ofr use in the controllers
        return ({
            isLoggedIn: isLoggedIn,
            getUserStatus: getUserStatus,
            login: login,
            logout: logout,
            register: register
        });
    }]);