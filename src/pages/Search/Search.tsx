//@ts-nocheck
import React, { Component } from 'react';
import ListPets from '../../pets/ListPets';
import Breeds from './Breeds';
import './Search.css';
import Type from './Type';

class Search extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
            selected: null,  
            animals:[],
            breed: [],
            type: '',
            age:'',
            size:'',
            gender: '',
            name:''
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
            //breed api call
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
                
                let type = this.state.type;
                console.log('wow', type)
                return fetch(`https://api.petfinder.com/v2/types/{$type}/breeds`,{
                headers: {
                    'Authorization': data.token_type + ' ' + data.access_token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            }).then((res) => {
                return res.json();
                
            }).then((data) => {
                console.log('breeds', data);
                
                this.setState({
                    breed: data.breeds
                })
            })
                
          
        }).catch((err) => {
            console.log('err',err)
            console.log('something went wrong');
        })
        
    }
    setSelected(selected){
        console.log('selected',selected);
        this.setState({
            selected: selected
        });
    }
    updateAge = (age) => {
        console.log('age',age);
        this.setState({
            age: age
        })
    }
    updateSize = (size) => {
        console.log('size',size);
        this.setState({
            size: size
        })
    }
    updateGender = (gender) => {
        console.log('gender',gender)
        this.setState({
            gender: gender
        })
    }

    //populate breeds dropdown after choosing types
    updateType = type => {
        console.log('inside update type',type);
        this.setState({
            type: type,
        });
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
            //breed api call
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
                
                let type = this.state.type;
                console.log('wow2', type)
                let baseUrl = 'https://api.petfinder.com/v2/types/'
                let breeds = '/breeds'
                let breedsUrl = baseUrl + type + breeds;
                return fetch(breedsUrl,{
                headers: {
                    'Authorization': data.token_type + ' ' + data.access_token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            }).then((res) => {
                return res.json();
                
            }).then((data) => {
                console.log('breeds', data);
                
                this.setState({
                    breed: data.breeds
                })
            })
                
          
        }).catch((err) => {
            console.log('err',err)
            console.log('something went wrong');
        })
    }
    render(){
        let breeds = this.state.selected
            ? <Breeds breeds={this.state.breeds}
                        name={this.state.selected['breed']}
                        changeHandler={ e => this.setSelected(e)}/>
            : <div className="breed__placeholder">Select a breed above</div>;
        return (
            <div className='searchPage'>
                <Type
                    updateType={(e) => {this.updateType(e)}}
                    handleSubmit={(e) => {this.handleSubmit(e)}}
                  />
                <div className='filters'>
                <div>
                    <Breeds 
                        breeds={this.state.breed}
                        changeHandler={selected => this.setSelected(selected)}/>
                    {breeds}
                </div>
                <section className='filterAge'>
                    <label>Age</label>
                        <select className='ages'
                                onChange={ (e) => {this.updateAge(e.target.value)}}>
                            <option value='young'>Young</option>
                            <option value='adult'>Adult</option>
                            <option value='senior'>Senior</option>
                        </select>
                </section>     
                <section className='filterSize'>
                    <label>Size</label>
                        <select className='sizes'
                                onChange = { (e) => {this.updateSize(e.target.value)}}
                            >
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                </section>
                <section className='filterGender'>
                    <label>Gender</label>
                        <select className='genders'
                                onChange={ (e) => {this.updateGender(e.target.value)}}>
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
