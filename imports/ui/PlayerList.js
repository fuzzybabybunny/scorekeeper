import React from 'react';
import {Players} from '/imports/api/players';
import Player from '/imports/ui/Player';
import FlipMove from 'react-flip-move';

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
				<FlipMove maintainContainerHeight={true} easing="cubic-bezier(0, 0.7, 0.8, 0.1)">
					{this.renderPlayers()}
				</FlipMove>
			</div>		
		);
	}

};