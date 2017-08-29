import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
	_id: 1,
	name: 'Fred',
	score: 22
},{
	_id: 2,
	name: 'Tom',
	score: -83
},{
	_id: 3,
	name: 'Susan',
	score: 100
}];

const renderPlayers = function(playersList){
	return jsxList = playersList.map(function(player){
		return <p key={player._id}>{player.name} has {player.score} points.</p>;
	});
};

Meteor.startup(function(){
	let title = "ScoreKeeper!";
	let name = 'Victor';

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