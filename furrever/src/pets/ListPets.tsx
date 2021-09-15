//@ts-nocheck
import React, { Component } from 'react';
import { createImportSpecifier } from 'typescript';
import PetCard from './PetCard';

class ListPets extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results:{
                animals:[]
            }
		};
	  }
    componentDidMount() {
        let key = 'emgN5gU6XFK7J2VdK1IWDwWBiLW4XH417eLGrrfeybZkWJqQDX';
        let secret = '0EoKevqZjCXBteQwL3ZF5tCz4yUis9ZzGHKLu8m2';
        let org='RI77';
        let status='adoptable';
        
        //need to generate token
        fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            console.log('res',res);
            return res.json();
        }).then((data) => {
            console.log('token',data);

            //second api call using token
            return fetch('https://api.petfinder.com/v2/animals?organization=' + org + '&status=' + status,{
                headers: {
                    'Authorization': data.token_type + ' ' + data.access_token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log('pets', data);
            this.setState({
                results: data
            })
        }).catch((err) => {
            console.log('err',err)
            console.log('something went wrong');
        })
    }
	render() {
        if(this.state.results.animals){
            let animals = this.state.results.animals;
            console.log(animals);
            let pets = animals.map((pet) => {
               return (
                        <ul id='pet'>
                            <li key={pet.id}>
                                <PetCard
                                    id={pet.id}
                                    name={pet.name}
                                    pics={pet.photos.map((element, index) => {
                                        return <img src={element.medium} key={index}/>
                                    })}
                                />
                            </li>
                        </ul>
               );
            });
           return (
                <div>
                    {pets}
                </div>
           );
        }
        return <div>No results</div>;
    }
}
export default ListPets;