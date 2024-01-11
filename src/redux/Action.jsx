import axios from "axios"
import { CART, LOGOUT, MSG, SIGNIN, SIGNUP } from "./ActionType"
import { useNavigate } from "react-router-dom"


export const funSignIn = (data) => (_dispatch) => {
  try {
    axios.post("https://max-backend-eujg.onrender.com/login", data)
      .then((res) => {
        console.log(res.data.msg)
       
        if (res.data){
          localStorage.setItem("login", true)
          _dispatch({ type: MSG, payload: res.data.msg })
        }
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
    axios.post("https://max-backend-eujg.onrender.com/signup", data)
      .then((res) => {
        console.log(res.data) 
        // window.location.href = "/"
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
    axios.post("https://max-backend-eujg.onrender.com/cart", data)
      .then((res) => {
        console.log("cart", res.data)

      })
  }
  catch (error) {
    console.log(error)
  }
}