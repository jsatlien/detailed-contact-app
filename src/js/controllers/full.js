function FullController (ContactService) {

  let vm = this;
  vm.contacts = [];

  function init () {
    ContactService.allContacts().then((response) => {
      vm.contacts = response.data;
    });
  };

  init();
};

FullController.$inject = ['ContactService'];
export { FullController };
