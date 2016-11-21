function HomeController (ContactService) {

  let vm = this;
  vm.contacts = [];

  function init () {
    ContactService.allContacts().then((response) => {
      vm.contacts = response.data;
    });
  };

  init();
};

HomeController.$inject = ['ContactService'];
export { HomeController };
