//@ts-nocheck
import React, { Component } from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
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
            age:'Young',
            size:'Small',
            gender: 'Female',
		};
	  }
    handleClick = (e) => {
        e.preventDefault();
        console.log('handle click');
        let key = 'emgN5gU6XFK7J2VdK1IWDwWBiLW4XH417eLGrrfeybZkWJqQDX';
        let secret = '0EoKevqZjCXBteQwL3ZF5tCz4yUis9ZzGHKLu8m2';
        let org='RI77';
        let status='adoptable';
        let type = this.state.type;
        console.log('type10', type)
        let age = this.state.age;
        let size = this.state.size;
        let gender = this.state.gender;
        let selected = this.state.selected;
        
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
            return fetch('https://api.petfinder.com/v2/animals?&status=' + status,{
                headers: {
                    'Authorization': data.token_type + ' ' + data.access_token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        }).then((res) => {
            return res.json();
        }).then((data) => {
             console.log('pets2', data);
            this.setState({
                animals: data.animals
            })
            //filtering api call
            fetch('https://api.petfinder.com/v2/oauth2/token', {
                method: 'POST',
                body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((res) => {
                console.log('res2',res);
                return res.json();
            }).then((data) => {
                console.log('token',data);
                
                let baseUrl = 'https://api.petfinder.com/v2/animals/?type='
                let breedsUrl = baseUrl + type + '&breed=' + selected;
                let fullUrl = breedsUrl + '&gender=' + gender + '&size=' + size + '&age=' + age
                return fetch(fullUrl, {
                    headers: {
                        'Authorization': data.token_type + ' ' + data.access_token,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
            })
            }).then((res) => {
                return res.json();
                
            }).then((data) => {
                console.log('breeds2', data);
                
                this.setState({
                   animals: data.animals
                })
                console.log('filter',this.state.selected)
            })
                
          
        }).catch((err) => {
            console.log('err',err)
            console.log('something went wrong');
        })
        
    }
    setSelected(selected){
        console.log('selected',selected);
        this.setState({
            selected: selected.name
        });
    }
    updateAge = (age) => {
        console.log('age',age);
        this.setState({
            age
        })
    }
    updateSize = (size) => {
        console.log('size',size);
        this.setState({
            size
        })
    }
    updateGender = (gender) => {
        console.log('gender',gender)
        this.setState({
            gender
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
            return fetch('https://api.petfinder.com/v2/animals?organization=&status=' + status,{
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
                return fetch(breedsUrl ,{
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
        return (
            <div className='searchPage'>
                <Type
                    updateType={(e) => {this.updateType(e)}}
                    handleSubmit={(e) => {this.handleSubmit(e)}}
                  />
                <form className='searchForm'>
                    <div className='filters'>
                    <div>
                        <Breeds 
                            breeds={this.state.breed}
                            changeHandler={selected => this.setSelected(selected)}/>
                        {/* {breeds} */}
                    </div>
                    <section className='filterAge'>
                        <label>Age</label>
                            <select className='ages'
                                    value={this.state.age}
                                    onChange={ (e) => {this.updateAge(e.target.value)}}>
                                <option value='young'>young</option>
                                <option value='adult'>adult</option>
                                <option value='senior'>senior</option>
                            </select>
                    </section>     
                    <section className='filterSize'>
                        <label>Size</label>
                            <select className='sizes'
                                    value={this.state.size}
                                    onChange = { (e) => {this.updateSize(e.target.value)}}
                                >
                                <option value='small'>small</option>
                                <option value='medium'>medium</option>
                                <option value='large'>large</option>
                            </select>
                    </section>
                    <section className='filterGender'>
                        <label>Gender</label>
                            <select className='genders'
                                    value={this.state.gender}
                                    onChange={ (e) => {this.updateGender(e.target.value)}}>
                                <option value='female'>female</option>
                                <option value='male'>male</option>
                            </select>
                    </section>
                    <input
                        type='button'
                        value='submit'
                        onClick = {e => this.handleClick(e)}
                    ></input>
                    <ListPets animals={this.state.animals} />
                    </div>

                </form>
            </div>
        )
    }
}
 
export default Search
