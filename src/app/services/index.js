import {API_OFFICES} from '../constants/constants'

export const getOffices = () => {
    return fetch(API_OFFICES)
    .then((response) => {
        return response.json()
    })
}