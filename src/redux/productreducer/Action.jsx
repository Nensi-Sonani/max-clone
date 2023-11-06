import axios from 'axios'
import { ERROR, SUCCESS, LOADING } from './ActionType'
export const funFetchData = (_dispatch) => {
    _dispatch({ type: LOADING })
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            _dispatch({ type: SUCCESS, payload: res.data })
        })
        .catch((error) => {
            _dispatch({ type: ERROR })
        })

}