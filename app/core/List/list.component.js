angular.
module('list').
component('list', {
  templateUrl: 'core/list/list.template.html',
  controller: ListController,
  controllerAs: 'ctrl'
});

function ListController($scope, $mdDialog) {
  $scope.items = [];

  this.addListItem = function() {
    var confirm = $mdDialog.prompt()
      .title('What is your item name?')
      .placeholder('Item name')
      .ariaLabel('Item name')
      .ok('Add')
      .cancel('No, thanks');

    $mdDialog.show(confirm).then(function(result) {
      if (result === undefined) {
        alert('Please, type item name');
        return;
      }

      for (var i = 0; i < $scope.items.length; i++) {
        if ($scope.items[i] === result) {
          alert('You already have such item');
          return;
        }
      }

      $scope.items.push(result);

    }, function() {
        alert('You didn\'t name your item.');
    });
  };
}