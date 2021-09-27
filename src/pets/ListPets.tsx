//@ts-nocheck
import React, { Component } from 'react';
import { createImportSpecifier } from 'typescript';
import PetCard from './PetCard';

class ListPets extends React.Component {
	render() {
        const pets = this
            .props.animals.map((pet, i) => 
            <PetCard {...pet} key={i} 
                              onClick={(e) => this.props.onClick(e)}
            />)

            return(
                <div>{pets}</div>
            )
    }
}

ListPets.defaultProps = {
    animals: []
}
export default ListPets;