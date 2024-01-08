import axios from 'axios'
import { ERROR, SUCCESS, LOADING } from './ActionType'
export const funFetchData = (filterQuery) => (_dispatch) => {
    let filter = filterQuery.replaceAll(",", "")
    console.log(filter)
    _dispatch({ type: LOADING })
    axios.get(`https://max-backend-eujg.onrender.com/products${filter}`)
        .then((res) => {
           // console.log(res.data.data)
            _dispatch({ type: SUCCESS, payload: res.data.data })
        })
        .catch((error) => {
            _dispatch({ type: ERROR })
        })

}