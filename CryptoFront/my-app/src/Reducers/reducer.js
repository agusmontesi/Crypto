import {GET_COINS} from '../Actions/actions';

const initialState = {
    coins: [],
}

const reducer = (state = initialState, action) => {
if(action.type === GET_COINS){
    return {
        ...state, 
        coins: action.payload
    }
}


    return state
}

export default reducer