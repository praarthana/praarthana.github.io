angular.module('praarthana', ['ngAnimate', 'ui.bootstrap']);
angular.module('praarthana').controller('TypeaheadCtrl', function($scope, $http) {

    var _selected;

    $scope.ngModelOptionsSelected = function(value) {
        if (arguments && arguments.length) {
            _selected = value;
        } else {
            return _selected;
        }
    };

    $scope.go = function(url) {
        if (url) {
            window.open(url,'_self');
        }
    };

    $scope.modelOptions = {
        debounce: {
            default: 500,
            blur: 250
        },
        getterSetter: true
    };

    $http.get('//praarthana.github.io/data/songs.json')
        .then(function(response) {
            $scope.songs = response.data;
        });

});
