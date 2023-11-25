import { CART, LOGOUT, MSG, SIGNIN, SIGNUP } from "./ActionType";

let initialState = {
    user: {},
    isLogin: false,
    isSignUp: false,
    msg: "",
    cart: []
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case MSG:
            return {
                ...state,  isLogin: false, isSignUp: false,msg: action.payload
            }
        case SIGNIN:
            // console.log(action.payload)
            return {
                ...state, user: action.payload, isLogin: true, isSignUp: false,msg:""
            }
        case SIGNUP:
            return {
                ...state, isSignUp: true
            }

        case LOGOUT:
            return initialState
        case CART:
            return { ...state, cart: action.payload }


        default:
            return state
    }
}
export default Reducer