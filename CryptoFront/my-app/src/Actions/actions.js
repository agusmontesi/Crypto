import axios from "axios"
export const GET_COINS  = 'GET_COINS';



export const getCoins = () => {
    return function (dispatch) {
            axios.get(`http://localhost:3001/`)
            .then(response => {
                console.log(response)
                dispatch({type: GET_COINS, payload: response.data})
            })
       
        }
}


