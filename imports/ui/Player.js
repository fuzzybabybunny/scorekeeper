import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Players} from '/imports/api/players';


export default class Player extends React.Component{

	render(){
		return (
			<p key={this.props.player._id}>
				{this.props.player.name} has {this.props.player.score} point(s).
				<button onClick={() => {
					Players.remove(this.props.player._id)
				}}>X</button>
				<button onClick={() => {
					Players.update(this.props.player._id, {$inc: {score: 1}})
				}}>+</button>
				<button onClick={() => {
					Players.update(this.props.player._id, {$inc: {score: -1}})
				}}>-</button>
			</p>
		);
	}

};

Player.propTypes = {
	player: PropTypes.object.isRequired
};
