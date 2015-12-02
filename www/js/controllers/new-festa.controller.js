angular.module('baztan')
    .controller('NewFestaCtrl', function($scope) {
        //todos los clientes sincronizados con el servidoe en tiempo real
        $scope.users = $scope.$meteorCollection(function() {
            return Meteor.users.find({
                _id: {
                    $ne: Meteor.userId()
                }
            });
        }, false);
        console.log($scope.festak);

        $ionicModal.fromTemplateUrl('templates/new-festa.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        $scope.openNewFestaModal = function() {
            $scope.modal.show();
        };
        $scope.remove = function(festa) {
            $scope.festak.remove(festa);
        };
    });
