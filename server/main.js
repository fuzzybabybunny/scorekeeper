import {Meteor} from 'meteor/meteor';

import {Players} from './../imports/api/players';

Meteor.startup(function(){

	Players.remove({});

	const playersArray = [{
		name: 'Fred',
		score: 1
	},{
		name: 'Tom',
		score: 2
	},{
		name: 'Susan',
		score: -1
	}];

	playersArray.forEach(doc => {
		Players.insert(doc);
	})

	Meteor.publish('players', function(){
		return Players.find();
	});

}); 
