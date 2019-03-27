import React from 'react'
import styled from 'styled-components/macro'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const AuthButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row;
  position: absolute;
  right: 38px;
  top: 53px;
  align-items: center;
`

const SignUpWrapper = styled.div`
  background: #FFFFFF;
  border-radius: 10px; 
  color: ${props => props.theme.main};
  width: 160px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const LoginWrapper = styled.div`
  color: #FFFFFF;
  margin-right: 48px;
  cursor: pointer;
`

const AuthButtons = ({replace}) => {
  return (
    <AuthButtonsWrapper>
      <LoginWrapper onClick={() => replace('login')}>
        Sign In
      </LoginWrapper>
      <SignUpWrapper onClick={() => replace('signup')}>
        Sign Up
      </SignUpWrapper>
    </AuthButtonsWrapper>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    replace: path => {
      return dispatch(push('/' + path))
    }
  }
}

export default connect(null, mapDispatchToProps)(AuthButtons)
