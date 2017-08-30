import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';

const renderPlayers = function(playersList){
	return jsxList = playersList.map(function(player){
		return <p key={player._id}>{player.name} has {player.score} points.</p>;
	});
};

Meteor.startup(function(){

	Tracker.autorun(function(){
		Meteor.subscribe('players');
		let title = "ScoreKeeper!";
		let name = 'Victor';
		let players = Players.find().fetch();

		let jsx = (
			<div>
				<h1>{title}</h1>
				<p>Hello, {name}!</p>
				<p>Second paragraph.</p>
				{renderPlayers(players)}
			</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));

	});

	Players.insert({
		name: 'Ted',
		score: 13
	});
});