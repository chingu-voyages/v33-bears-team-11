//@ts-nocheck
import React, {useState} from 'react'

//Components
import Pictures from '../../components/PetDetails/Pictures';
import Contact from '../../components/PetDetails/Contact';
import Info from '../../components/PetDetails/Info';
import Description from '../../components/PetDetails/Description';

import tempData from './tempData.json'
import './PetDetails.css';

function PetDetails() {
    const [data] = useState(tempData)
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
    const {name, age, gender, size, species, description } = data;
    return (
        <div className="container">
            {checkAttributes()}

            <div className="flexbox-item top-left">
                <Pictures name={name}/>
            </div>
            <div className="flexbox-item top-right">
                <Info 
                    age={age}
                    gender={gender}
                    size={size}
                    species={species}
                    attributes={attributes}
                />
            </div>
            <div className="flexbox-item bot-left">
                <Contact/>
            </div>
            <div className="flexbox-item bot-right">
                <Description description={description}/>
            </div>
            {console.log(attributes)}
        </div>
    )
}

export default PetDetails
