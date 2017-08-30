import {Meteor} from 'meteor/meteor';

import {Players} from './../imports/api/players';

Meteor.startup(function(){

	Players.remove({});

	const playersArray = [{
		name: 'Fred',
		score: 22
	},{
		name: 'Tom',
		score: -83
	},{
		name: 'Susan',
		score: 100
	}];

	playersArray.forEach(doc => {
		Players.insert(doc);
	})

	console.log(Players.find().fetch());

	Meteor.publish('players', function(){
		return Players.find();
	});

});