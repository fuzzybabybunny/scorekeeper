import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import PropTypes from 'prop-types';

export default class App extends React.Component{
	render(){
		return(
			<div>
				<TitleBar title={this.props.title} subtitle={this.props.subtitle}/>
				<AddPlayer score={10}/>
				<PlayerList players={this.props.players}/>
			</div>
		)
	}
};

// Do this to ensure that required data gets passed to the next component!
App.propTypes = {
	title: PropTypes.string.isRequired,
	players: PropTypes.array.isRequired
}