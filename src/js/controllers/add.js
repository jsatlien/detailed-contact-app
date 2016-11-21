function AddController ($state, ContactService) {

  let vm = this;

  this.addContact = addContact;

  function addContact (contact) {
    ContactService.addContact(contact).then((resp) => {
      $state.go('root.home');
      console.log(contact)
    });

  }


};

AddController.$inject = ['$state', 'ContactService'];
export { AddController };
