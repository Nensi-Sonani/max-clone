import { ERROR, SUCCESS, LOADING } from './ActionType'

let initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case LOADING: return {
            ...state, isLoading: true
        }
        case SUCCESS: return {
            ...state, data: payload, isLoading: false
        }
        case ERROR:return{
            ...state,isError:true,isLoading:false
        }
        default:
            return state
    }
}