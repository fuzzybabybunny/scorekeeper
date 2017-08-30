import React from 'react';
import {Players} from '/imports/api/players';
import Player from '/imports/ui/Player';

export default class PlayerList extends React.Component{

	renderPlayers(){

		if(this.props.players.length === 0){
			return(
				<div className="item">
					<p className="item__message">Add your first player.</p>
				</div>
			);
		} else {
			return this.props.players.map((player) => {
				return <Player key={player._id} player={player} />
			});
		}

	}

	render(){
		return(
			<div>
				{this.renderPlayers()}
			</div>		
		);
	}

};