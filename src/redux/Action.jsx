import axios from "axios"
import { CART, LOGOUT, MSG, SIGNIN, SIGNUP } from "./ActionType"
import { useNavigate } from "react-router-dom"


export const funSignIn = (data) => {

  return {
    type: SIGNIN,
    payload: data
  }
  //try {
  // axios.post("http://localhost:8080/login", data)
  //   .then((res) => {

  //     if (res.data.msg)
  //       dispatch({type:MSG,payload:res.data})
  //     else
  //       dispatch({ type: SIGNIN, payload: res.data })
  //   })

  // }
  /// catch (error) {
  // console.log(error)
  //}

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
      .then((res) => {
        console.log("cart", res.data)

      })
  }
  catch (error) {
    console.log(error)
  }
}