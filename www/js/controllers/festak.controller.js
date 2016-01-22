angular.module('baztan')
    .controller('FestakCtrl', function($scope, $ionicModal, $meteor) {
        //todos los clientes sincronizados con el servidoe en tiempo real
        $scope.festak = $scope.$meteorCollection(Festak, false);
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
        $scope.remove = function(chat) {
            $meteor.call('removeFesta', chat._id);
        };
        
        console.log("guay");
    });
