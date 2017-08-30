import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => {

	Tracker.autorun(() => {
		Meteor.subscribe('players');
		let players = Players.find().fetch();
		let title = "ScoreKeeper!";
		ReactDOM.render(<App players={players} title={title} />, document.getElementById('app'));
	});

});