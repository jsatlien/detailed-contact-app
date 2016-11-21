function SingleController ($state, $stateParams, ContactService) {

  let vm = this;
  vm.contact = {};

  this.removeModal = removeModal;

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

};

SingleController.$inject = ['$state', '$stateParams', 'ContactService'];
export { SingleController };
