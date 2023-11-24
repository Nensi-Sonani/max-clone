import axios from "axios"
import { CART, LOGOUT, SIGNIN, SIGNUP } from "./ActionType"

export const funSignIn = (data) => (dispatch) => {
  try {
    axios.post("http://localhost:8080/login", data)
      .then((res) => {
        console.log(res.data)
        dispatch({ type: SIGNIN, payload: res.data })
      })

  }
  catch (error) {
    console.log(error)
  }

}
export const funSignUp = (dispatch) => {
  try {
    axios.post("http://localhost:8080/signup")
      .then((res) => {
        dispatch({ type: SIGNUP })
      })

  }
  catch (error) {
    console.log(error)
  }


}
export const funLogout = () => {
  return {
    type: LOGOUT
  }
}
export const funAddCart = (data) => (dispatch) => {
  try {
    axios.post("http://localhost:8080/cart/", data)
      .then((res) => console.log("cart", res.data))
  }
  catch (error) {
    console.log(error)
  }
}