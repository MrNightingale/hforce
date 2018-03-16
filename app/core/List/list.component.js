angular.
module('list').
component('list', {
  templateUrl: 'core/list/list.template.html',
  controller: ListController,
  controllerAs: 'ctrl'
});

function ListController($mdDialog) {
  const self = this;
  self.items = ['First Item'];

  this.addListItem = () => {
    let confirm = $mdDialog.prompt()
      .title('What is your item name?')
      .placeholder('Item name')
      .ariaLabel('Item name')
      .ok('Add')
      .cancel('No, thanks');

    $mdDialog.show(confirm).then(result => {
      if (result === undefined) {
        alert('Please, type item name');
        return;
      }

      for (let i = 0; i < self.items.length; i++) {
        if (self.items[i] === result) {
          alert('You already have such item');
          return;
        }
      }

      self.items.push(result);

    }, () => {
        alert('You didn\'t name your item.');
    });
  };

  this.cloneItem = () => {
    let confirm = $mdDialog.prompt()
      .title('Do you want to clone your item?')
      .placeholder('Enter your new Item name')
      .ariaLabel('Clone Item name')
      .ok('Clone')
      .cancel('No, thanks');

    $mdDialog.show(confirm).then(result => {
      if (result === undefined) {
        alert('Please, type item name');
        return;
      }

      for (let i = 0; i < self.items.length; i++) {
        if (self.items[i] === result) {
          alert('You already have such item');
          return;
        }
      }

      self.items.push(result);

    }, () => {
      alert('You didn\'t name your item.');
    });
  };

  this.editItem = () => {
    let confirm = $mdDialog.prompt()
      .title('Do you want to edit your item?')
      .placeholder('Enter your edited Item name')
      .ariaLabel('Edit Item name')
      .ok('Edit')
      .cancel('No, thanks');

    $mdDialog.show(confirm).then(result => {
      if (result === undefined) {
        alert('Please, type edited name');
        return;
      }

      for (let i = 0; i < self.items.length; i++) {
        if (self.items[i] === result) {
          alert('You already have such item');
          return;
        }
      }

      // TODO add edit feature

    }, () => {
      alert('You didn\'t name your item.');
    });
  };
}