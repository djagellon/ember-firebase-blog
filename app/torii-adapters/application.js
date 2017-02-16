import Ember from 'ember';  
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';  

// Configure torii so we can use authentication
// Torii is an authentication library for Ember. 
// It's the preferred way to work with authentication with Emberfire.
// open, fetch, and close methods are defined in:
// node_modules/emberfire/addon/torii-adapters/firebase.json
export default ToriiFirebaseAdapter.extend({  
  firebase: Ember.inject.service()
});