import Config from '../Config'

const Login = (username, password) => {
  return async dispatch => {
    const response = await fetch(`${Config.API_URL}/api/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      })
    })

    const data = await response.json()
    if (data.status) {
      dispatch({
        type: 'LOGIN_SUCCESS'
      })
    }
  }
}

const SignUp = (firstName, lastName, username, password) => {
  return async dispatch => {
    const response = await fetch(`${Config.API_URL}/api/user/signup`, {
      method: 'POST',
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username,
        password
      })
    })

    const data = await response.json()
    if (data.status) {
      dispatch({
        type: 'SIGNUP_SUCCESS'
      })
    }
  }
}

const initialState = {
  authenticated: false
}

const Auth = (state=initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        authenticated: true
      }
    case 'SIGNUP_SUCCESS': 
      return {
        authenticated: true
      }
    default: return state
  }
}

export { Auth, Login, SignUp }
