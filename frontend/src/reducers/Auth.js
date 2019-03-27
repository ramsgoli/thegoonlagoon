const Login = (username, password) => {
  return async dispatch => {
    const response = await fetch('http://localhost:9000/api/user/login', {
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

const initialState = {
  authenticated: false
}

const Auth = (state=initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        loading: true
      }
    default: return state
  }
}

export { Auth, Login }
