//@ts-nocheck
import React, { Component } from 'react';
import ListPets from '../../pets/ListPets';
import Breeds from './Breeds';


class Search extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
            selected: null,  
            animals:[],
            breed: '',
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
                animals: data.animals
            })
        }).catch((err) => {
            console.log('err',err)
            console.log('something went wrong');
        })
        
    }
    render(){
        // let breeds = this.state.selected
        //     ? <Breeds breeds={this.state.selected.name}/>
        //     : <div className="breed__placeholder">Select a breed above</div>;
        return (
            <div className='searchPage'>
                <section className='imageButtons'>
                    <img className='dogThumb' src={require('../../images/dogbutton.jpg')} alt='dogThumb'/>
                    <img className='catThumb' src={require('../../images/catbutton.jpg')} alt='catThumb'/>
                    <img className='otherThumb' src={require('../../images/hamsterbutton.jpg')} alt='otherThumb'/>
                </section>
                <div className='filters'>
                {/* <div>
                    <Breeds breeds={this.state.breeds}/>
                    {breeds}
                </div> */}
                <section className='filterAge'>
                    <label>Age</label>
                        <select className='ages'>
                            <option value='young'>Young</option>
                            <option value='adult'>Adult</option>
                            <option value='senior'>Senior</option>
                        </select>
                </section>     
                <section className='filterSize'>
                    <label>Size</label>
                        <select className='sizes'>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                </section>
                <section className='filterGender'>
                    <label>Gender</label>
                        <select className='genders'>
                            <option value='female'>Female</option>
                            <option value='male'>Male</option>
                        </select>
                </section>
                <p>Advanced Search</p>
                <ListPets animals={this.state.animals} />
                </div>
            </div>
        )
    }
}
 
export default Search
