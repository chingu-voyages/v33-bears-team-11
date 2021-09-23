//@ts-nocheck
import axios from 'axios';
const baseUrl = "https://api.petfinder.com/v2";


const key = process.env.REACT_APP_KEY;
const secret = process.env.REACT_APP_SECRET;
const org = 'RI77'
const status = "adoptable";

const getToken = () => {
    let response = axios({
        method: 'post',
        url: `${baseUrl}/oauth2/token`,
        data: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
            "Content-Type" : 'application/x-www-form-urlencoded'
        }
    })
    return response;
}

const tokenCall = (resObject) => {
    let response = axios.get(`${baseUrl}/animals?organization=${org}&status=${status},`, {
        headers: {
            'Authorization': resObject.data.token_type + ' ' + resObject.data.access_token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    return response;
}

const getAnimalBreeds = (resObject, type) => {
    let response = axios.get(`${baseUrl}/types/${type}/breeds`, {
        headers: {
            'Authorization': resObject.data.token_type + ' ' + resObject.data.access_token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    return response;
}

const getAnimal = (id) => {
    let response = axios.get(`${baseUrl}/animals/${id}`);
    return response;
}

const PetService = {
    getToken,
    tokenCall,
    getAnimalBreeds,
    getAnimal
}

export default PetService;