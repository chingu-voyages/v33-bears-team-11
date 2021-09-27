//@ts-nocheck
import React, { Component }  from 'react'
import cat from '../../images/cat.jpg';
import bunny from '../../images/bunny.jpg';
import './Type.css';

class Type extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: true
        }
    }

    updateType = (e) => {
        console.log('ho')
        console.log('e',e.target.value)
        this.props.updateType(e.target.value);
        this.setState({show: !this.state.show})
    }
    render(){
        const { show } = this.state; 
        return (
            <div>
                {show && 
                <form className='box overlay'>
                    <label>Dog</label>
                    <button
                        type='button'
                        className='typebtn dogThumb'
                        onClick={(e) => this.updateType(e)}
                        value='dog'>
                    </button> 
                    <label>Cat</label>   
                    <button
                        type='button'
                        className='typebtn catThumb'
                        onClick={(e) => this.updateType(e)}
                        value='cat'>
                    </button> 
                    <label>Other</label>   
                    <button
                        type='button'
                        className='typebtn bunnyThumb'
                        onClick={(e) => this.updateType(e)}
                        value='other'>
                    </button>            
                </form>}
            </div>
        )
    }
}

export default Type;
