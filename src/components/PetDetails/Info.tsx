//@ts-nocheck
import React from 'react'


function Info({age, gender, size, species, attributes}) {
    let attributeOps = [
        "spayed_neutered",
        "house_trained",
        "declawed",
        "special_needs",
        "shots_current",
        "children",
        "dogs",
        "cats"
    ]

    const checkAttributes =() => {
        attributeOps = attributeOps.filter(val => !attributes.includes(val))
    }
    return (
        <div>
            {checkAttributes()}
            {age}
            {gender}
            {size}
            {species}
            {/*true attributes */}
            {attributes.join(", ")}  
            {'\n'}
            {/*false attributes */}
            {attributeOps}
        </div>
    )
}

export default Info
