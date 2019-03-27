import React from 'react'
import styled from 'styled-components/macro'
import Logo from '../../components/Logo'
import LoginPanel from './components/panel'
import SignInHint from './components/SignInHint'

const LoginWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
`

class Login extends React.Component {
  render() {
    return (
      <LoginWrapper>
        <Logo />
        <LoginPanel />
        <SignInHint />
      </LoginWrapper>
    )
  }
}

export default Login
