//@ts-nocheck
import React, {useState} from 'react'
import tempData from './tempData.json'
import './PetDetails.css';

function PetDetails() {
    const [attributes, setAttributes] = useState([])

    const checkAttributes = () => {
        const checks = {...tempData.attributes, ...tempData.environment}
        Object.entries(checks).forEach(entry => {
            const [key, value] = entry;
            if(value === true && !attributes.includes(key)){
                setAttributes(attributes => [...attributes, key])
            }
        })
    }

    return (
        <div className="container">
            {checkAttributes()}
            <div className="flexbox-item top-left">
                <div className="name">{tempData.name}</div>
            </div>
            <div className="flexbox-item top-right">
                <div className="age"><p>{tempData.age}</p></div>
                <div className="gender"><p>{tempData.gender}</p></div>
                <div className="size"><p>{tempData.size}</p></div>
                <div className="species"><p>{tempData.species}</p></div>
                <div className="species"><p>{attributes.join(", ")}</p></div>
                
            </div>
            <div className="flexbox-item bot-left">
                contact info
            </div>
            <div className="flexbox-item bot-right">
                <div className="desc"><p>{tempData.description}</p></div>
            </div>
            {console.log(attributes)}
        </div>
    )
}

export default PetDetails
