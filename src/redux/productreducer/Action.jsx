import axios from 'axios'
import { ERROR, SUCCESS, LOADING } from './ActionType'
export const funFetchData = (filterQuery) => (_dispatch) => {
    let filter = filterQuery.replaceAll(",", "")
    _dispatch({ type: LOADING })
    axios.get(`http://localhost:8080/products${filter}`)
        .then((res) => {
            console.log(res.data.data)
            _dispatch({ type: SUCCESS, payload: res.data.data })
        })
        .catch((error) => {
            _dispatch({ type: ERROR })
        })

}