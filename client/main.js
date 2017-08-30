import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

const renderPlayers = (playersList) => {
	return jsxList = playersList.map( (player) => {
		return (
			<p key={player._id}>
				{player.name} has {player.score} point(s).
				<button onClick={() => Players.remove(player._id)}>X</button>
				<button onClick={() => {
					Players.update(player._id, {$inc: {score: 1}})
				}}>+</button>
				<button onClick={() => {
					Players.update(player._id, {$inc: {score: -1}})
				}}>-</button>
			</p>
		);
	});
};

Meteor.startup(() => {

	Tracker.autorun(() => {
		Meteor.subscribe('players');
		let title = "ScoreKeeper!";
		let subtitle = "by fuzzybabybunny"
		let players = Players.find().fetch();

		let jsx = (
			<div>
				<TitleBar title={title} subtitle={subtitle}/>
				<AddPlayer score={10}/>
				{renderPlayers(players)}
			</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));

	});

});