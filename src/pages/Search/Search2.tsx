import React, {useEffect, useState} from 'react'
import PetService from '../../utils/PetService';

function SearchWHooks() {
    const [animals, setAnimals] = useState()
    const [breeds, setBreeds] = useState()
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        getAnimals()
        getBreeds()
    }, [])

    const getAnimals = async () => {
        let response = await PetService.getToken();
         await PetService.tokenCall(response).then(res => {
            console.log("Animals call", res)
            setAnimals(res.data.animals)
        })
    }

    const getBreeds = async() => {
        let response = await PetService.getToken();
        await PetService.getAnimalBreeds(response, "Dog").then(res => {
            console.log("Breeds call", res)
            setBreeds(res.data.breeds)
        })
    }
    
    return (
        <div>
            test
            {console.log(breeds)}
            {console.log(animals)}
        </div>
    )
}

export default SearchWHooks
