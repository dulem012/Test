
const API_URL = process.env.REACT_APP_API_URL;

export const getOffices = () => {
    return fetch(API_URL)
    .then((response) => {
        return response.json();
    })
};