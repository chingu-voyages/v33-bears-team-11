//@ts-nocheck
import React, {useState} from 'react'

function Pictures({name, photos, primary}) {
    const [images, setImages] = useState([])

    const getPhotos = () => {
        photos.map(obj => {
            Object.entries(obj).forEach(entry => {
                const [key, value] = entry;
                if(key === "small" && !images.includes(value)){
                    setImages(images => [...images, value])
                }
            })
        })
    }

    return (
        <div>
            {getPhotos()}
            {console.log(images)}
            {name}
            
            <img src={`${primary.medium}`}/>
            {images.map(image => {
                return <img style={{height:"100px", width: "100px"}}src={`${image}`}/>
            })}
            {console.log(photos)}
        </div>
    )
}

export default Pictures
