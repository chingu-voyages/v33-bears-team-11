//@ts-nocheck
import { timeStamp } from 'console';
import React from 'react';

class PetCard extends React.Component {
	render(){
		return (
			<div>
				<ul id='pet'>
					<li key={this.props.id}>
					<p>{this.props.name}</p>
					<div>{this.props.photos.map((element, index) => {
						return <img src={element.medium} key={index}/>
					})}</div>
					</li>
				</ul>
			</div>
		);
					
	}
}

export default PetCard;
