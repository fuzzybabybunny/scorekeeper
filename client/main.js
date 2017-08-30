import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';

Meteor.startup(() => {

	Tracker.autorun(() => {
		Meteor.subscribe('players');
		let title = "ScoreKeeper!";
		let subtitle = "by fuzzybabybunny";
		let players = Players.find().fetch();

		let jsx = (
			<div>
				<TitleBar title={title} subtitle={subtitle}/>
				<AddPlayer score={10}/>
				<PlayerList players={players}/>
			</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));

	});

});