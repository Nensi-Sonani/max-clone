import { CART, LOGOUT, SIGNIN, SIGNUP } from "./ActionType";

let initialState = {
    user: {},
    isLogin: false,
    isSignUp: false,
    cart: [{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,
    "description":"Your perfect pack for everyday use and walks in the forest Stash your laptop (up to 15 inches) in the padded sleeve your everyday",
    "category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }]
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            // console.log(action.payload)
            return {
                ...state, user: action.payload, isLogin: true, isSignUp: false
            }
        case SIGNUP:
            return {
                ...state, isSignUp: true
            }

        case LOGOUT:
            return initialState
        case CART:
            console.log(action.payload)
            return { ...state, cart: action.payload }


        default:
            return state
    }
}
export default Reducer