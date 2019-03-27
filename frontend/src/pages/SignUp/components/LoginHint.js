import React from 'react'
import styled from 'styled-components/macro'

const LoginHintWrapper = styled.div`
  display: flex;
  flex-flow: row;
  margin-top: 28px;
  color: #ffffff;
`

const Span = styled.span`
  font-weight: bold;
  cursor: pointer;
`

const LoginHint = () => {
  return (
    <LoginHintWrapper>
      <p>Already have an account?&nbsp;</p>
      <Span>Log In</Span>
    </LoginHintWrapper>
  )
}

export default LoginHint
