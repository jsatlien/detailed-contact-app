function SingleController ($state, $stateParams, ContactService) {

  let vm = this;
  vm.contact = {};
  vm.contacts = [];

  this.removeModal = removeModal;
  this.deleteContact = deleteContact;

  function init () {
    ContactService.getContact($stateParams.id).then((response) => {
      vm.contact = response.data;
    });
    ContactService.allContacts().then((response) => {
      vm.contacts = response.data;
    });
  };

  // function deleteContact (contact) {
  //   ContactService.removeContact($stateParams.id).then((response) => {
  //     vm.contacts = vm.contacts.filter((x) => {
  //       return contact.id !== x.id;
  //     });
  //   });
  //   $state.go('root.home')
  // }

  init();

  function removeModal () {
    $state.go('root.home')
  }

};

SingleController.$inject = ['$state', '$stateParams', 'ContactService'];
export { SingleController };
