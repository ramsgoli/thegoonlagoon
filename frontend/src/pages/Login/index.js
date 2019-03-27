import React from 'react'
import styled from 'styled-components/macro'
import { connect } from 'react-redux'

import Logo from '../../components/Logo'
import LoginPanel from './components/panel'
import SignInHint from './components/SignInHint'
import { Login } from '../../reducers'

const LoginWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
`

class LoginContainer extends React.Component {
  render() {
    return (
      <LoginWrapper>
        <Logo />
        <LoginPanel login={this.props.login} />
        <SignInHint />
      </LoginWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      dispatch(Login(username, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer)
