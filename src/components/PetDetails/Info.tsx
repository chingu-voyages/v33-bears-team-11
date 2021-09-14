import React from 'react'

function Info({age, gender, size, species, attributes}) {
    return (
        <div>
            {age}
            {gender}
            {size}
            {species}
            {attributes.join(", ")}
        </div>
    )
}

export default Info
