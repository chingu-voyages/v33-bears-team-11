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
    handleshow = () => {
        this.setState({show: !this.state.show})
    }
    render(){
        const { show } = this.state; 
        return (
            <div>
                {show && <form className='box overlay' onSubmit={this.handleshow}>                 
                   <button className='typebtn dogThumb'>
                        <p className='btnselection'>Dogs</p>
                    </button>
                    <button className='typebtn catThumb'>
                        <p className='btnselection'>Cats</p>
                    </button>
                    <button className='typebtn bunnyThumb'>
                        <p className='btnselection'>Other</p>
                    </button>
                </form>}
            </div>
        )
    }
}

export default Type;
