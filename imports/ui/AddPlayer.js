import React from 'react';
import {Players} from '/imports/api/players';

export default class AddPlayer extends React.Component{

	handleSubmit(e){
		e.preventDefault();
		let playerName = e.target.playerName.value;
		if(playerName){
			e.target.playerName.value = '';
			Players.insert({
				name: playerName,
				score: this.props.score
			});
		}
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" name="playerName" placeholder="Player Name"/>
				<button>Add Player</button>
			</form>
		);		
	}

};

