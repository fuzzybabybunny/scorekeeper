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
		let players = Players.find({},{
			sort: {
				score: -1
			}
		}).fetch();
		let title = "ScoreKeeper!";
		let subtitle = "Created by XYZ";
		ReactDOM.render(<App players={players} title={title} subtitle={subtitle} />, document.getElementById('app'));
	});

});