export const initialState = {
    listOfOffices : []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'dispatchOffices':
        return { listOfOffices: action.payload }
        default:
        return  { ...state }
    }
}