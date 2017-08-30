import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';

const renderPlayers = (playersList) => {
	return jsxList = playersList.map( (player) => {
		return (
			<p key={player._id}>
				{player.name} has {player.score} point(s).
				<button onClick={() => Players.remove(player._id)}>X</button>
				<button onClick={() => {
					Players.update(player._id, {$inc: {score: 1}})
				}}>+</button>
			</p>
		);
	});
};

const handleSubmit = (e) => {
	e.preventDefault();
	let playerName = e.target.playerName.value;
	if(playerName){
		e.target.playerName.value = '';
		Players.insert({
			name: playerName,
			score: 0
		});
	};
};

Meteor.startup(() => {

	Tracker.autorun(() => {
		Meteor.subscribe('players');
		let title = "ScoreKeeper!";
		let name = 'Victor';
		let players = Players.find().fetch();

		let jsx = (
			<div>
				<h1>{title}</h1>
				<p>Hello, {name}!</p>
				<p>Second paragraph.</p>
				<form onSubmit={handleSubmit}>
					<input type="text" name="playerName" placeholder="Player Name"/>
					<button>Add Player</button>
				</form>
				{renderPlayers(players)}
			</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));

	});

});