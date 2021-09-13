//@ts-nocheck
import { timeStamp } from 'console';
import React from 'react';

class PetCard extends React.Component {
	
	render(){
		return (
		<div className='pet' id={this.props.id}> 
			<p>{this.props.name}</p>
			<div>{this.props.pics}</div>
		</div>
		);
	}
}

export default PetCard;
