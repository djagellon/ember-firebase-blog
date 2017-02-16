import Ember from 'ember';

const {RSVP: {Promise}} = Ember;

export default function getOrCreateUser(uid, username, avatar, store) {
	
	// return user if one is found
	// create new one if it doesn't exist
	return new Promise( (resolve) => {
		store.query('user', {orderBy: 'uid', equalTo: uid }).then( (records) => {
			if (records.get('length') === 0) {
				resolve(store.createRecord('user', {
					uid: uid,
					username: username,
					avatar: avatar
				}));
			} else {
				resolve(records.get('firstObject'));
			}
		});
	});
}