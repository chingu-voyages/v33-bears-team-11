//@ts-nocheck

import React from 'react';

export default function PetCard(props) {
	return <div className='pet' 
        id={props.id}>
		<p>{props.name}</p>
	</div>;
}
