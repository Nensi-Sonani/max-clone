import axios from "axios"
import { CART, LOGOUT, SIGNIN, SIGNUP } from "./ActionType"

export const funSignIn = (data) => (dispatch) =>  {
  try {
      axios.post("http://localhost:8080/signup", data)
      .then((res) => {
        dispatch({ type: SIGNIN,payload:res.data})
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
        dispatch({ type: SIGNUP})
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
export const funAddCart = (data) => {
  return {
    type: CART,
    payload: data
  }
}