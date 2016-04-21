var app = angular.module('contactsManager',[]);

app.controller('pageCtrl',[
  '$scope', '$timeout',
  // Simulate delay for back end request
  function ( $scope , $timeout ) {

  // App logo / name
  $scope.brand = {
    url: document.location.origin+'/',
    title: 'Contacts Manager'
  };

  // Each nav link available
  $scope.urls = [
    {
      link: document.location.origin+'/',
      title: 'Click to go to the home page',
      text: 'Homepage'
    }
  ];

  $scope.addContact = function(contact) {
    // Add contact
    $scope.contacts.push({
     'company':$scope.company,
     'number': $scope.number,
     'email':$scope.email,
     'website':$scope.website
    });

    // Clear the inputs
    $scope.company = '';
    $scope.number = '';
    $scope.email = '';
    $scope.website = '';

    // Close the modal
    $('#addContact').modal('toggle');
  };

  $scope.promptRemove = function(contact) {
    // Add this contacts values
    $('#removeCompany').text(contact.company);
    $('#removeNumber').text(contact.number);
    $('#removeEmail').text(contact.email);
    $('#removeWebsite').text(contact.website);

    // Open the modal
    $('#promptRemove').modal('toggle');
  };

  $scope.removeContact = function(contact) {
    // Remove the contact
    var index = $scope.contacts.indexOf(contact);
    $scope.contacts.splice(index,1);

    // Close the modal
    $('#promptRemove').modal('toggle');
  };

  // Used for prompting user when contacts list is loading
  $scope.contactsLoading = true;

  // Faking request for data
  $timeout(function afterRetrievingVideos (){
    // Fake request
    var _contacts = [
      {
        company: 'Google',
        number: '123 321 1233',
        email: 'support@googe.com',
        website: 'http://google.com'
      }, {
        company: 'Facebook',
        number: '465 654 4566',
        email: 'support@facebook.com',
        website: 'http://facebook.com'
      }, {
        company: 'Twitter',
        number: '789 987 7899',
        email: 'support@twitter.com',
        website: 'http://twitter.com'
      }
    ];

    // Transfer the fake data to the scope
    $scope.contacts = _contacts;

    // Stop prompting that the list is loading
    $scope.contactsLoading = false;
  }, 1000);

}]);