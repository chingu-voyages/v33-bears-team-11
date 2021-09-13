//@ts-nocheck
import React, {useState} from 'react'
import tempData from './tempData.json'


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
        <div>
            {checkAttributes()}
            <div className="name">{tempData.name}</div>
            <div className="desc"><p>{tempData.description}</p></div>
            <div className="age"><p>{tempData.age}</p></div>
            <div className="gender"><p>{tempData.gender}</p></div>
            <div className="size"><p>{tempData.size}</p></div>
            <div className="species"><p>{tempData.species}</p></div>
            <div className="species"><p>{attributes.join(", ")}</p></div>
            {console.log(attributes)}
        </div>
    )
}

export default PetDetails
