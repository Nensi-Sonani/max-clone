import axios from "axios"
import { CART, LOGOUT, MSG, SIGNIN, SIGNUP } from "./ActionType"
import { useNavigate } from "react-router-dom"


export const funSignIn = (data) => (_dispatch) => {
  try {
    axios.post("http://localhost:8080/login", data)
      .then((res) => {
        // console.log(res.data)
        if (res.data.msg)
          _dispatch({ type: MSG, payload: res.data.msg })
        else
          _dispatch({ type: SIGNIN, payload: res.data })
      })

  }
  catch (error) {
    _dispatch({ type: MSG, payload: "some thing went wrong" })
  }

}
export const funSignUp = (data) => (_dispatch) => {
  try {
    axios.post("http://localhost:8080/signup", data)
      .then((res) => {
        console.log(res.data)
        if (res.data.msg)
          _dispatch({ type: MSG, payload: res.data.msg })
        else
          _dispatch({ type: SIGNUP})
      })

  }
  catch (error) {
    _dispatch({ type: MSG, payload: "some thing went wrong" })
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