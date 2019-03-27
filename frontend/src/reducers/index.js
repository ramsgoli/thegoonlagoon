const initialState = {
  loading: false
}

const Auth = (state=initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        loading: true
      }
    default: return state
  }
}

export default Auth
