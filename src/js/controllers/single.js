function SingleController ($state, $stateParams, ContactService) {

  let vm = this;
  vm.contact = {};

  vm.removeModal = removeModal;
  vm.deleteContact = deleteContact;
  function init () {
    ContactService.getContact($stateParams.id).then((response) => {
      vm.contact = response.data;
      console.log(vm.contact)
      console.log($stateParams.id)
    });
  };

  init();

  function removeModal () {
    $state.go('root.home')
  }

  function deleteContact (contact) {
    console.log("I got clicked")
    ContactService.removeContact($stateParams.id).then((response) => {
       console.log('Contact Removed')
       $state.go('root.home');
      });
  }

};

SingleController.$inject = ['$state', '$stateParams', 'ContactService'];
export { SingleController };
