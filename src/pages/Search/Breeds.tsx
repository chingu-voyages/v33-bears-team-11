//@ts-nocheck
import React, { Component } from 'react';

class Breeds extends Component {

  changeSelection(value) {
    if(value === 'None') {
      this.props.changeHandler(null);
    } else {
      // find the breed selected
      const breed = this.props.breeds.find(breed => breed.name === value);
      console.log('breed selected',breed)
      this.props.changeHandler(breed);
    }
  }
  updateBreed = (e) => {
    this.props.updateBreed(e.target.value);
  }

  render() {
    const options = this
          .props
          .breeds
          .map(
            (breed, i) => <option value={breed.name} key={i}>{breed.name}</option>
          );
    return (
      <div className='breed_selector'>
        <form>
          <label htmlFor='breed'>Select a breed:</label>
          <select
            id='breed'
            name='breed'
            onChange={e => this.changeSelection(e.target.value)}>
            <option value='None'>Select one...</option>
            {options}
          </select>
        </form>
      </div>
    );      
  }
}

export default Breeds;