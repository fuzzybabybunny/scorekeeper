import React from 'react';
import ReactDOM from 'react-dom';
import {Players} from '/imports/api/players';
import Player from '/imports/ui/Player';

export default class PlayerList extends React.Component{

	renderPlayers(){
		return this.props.players.map((player) => {
			return <Player key={player._id} player={player} />
		});
	}

	render(){
		return(
			<div>
				{this.renderPlayers()}
			</div>		
		);
	}

};