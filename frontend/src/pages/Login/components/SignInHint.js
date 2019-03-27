import React from 'react'
import styled from 'styled-components/macro'

const SignInHintWrapper = styled.div`
  display: flex;
  flex-flow: row;
  margin-top: 28px;
  color: #ffffff;
`

const Span = styled.span`
  font-weight: bold;
  cursor: pointer;
`

const SignInHint = () => {
  return (
    <SignInHintWrapper>
      <p>Don't have an account?&nbsp;</p>
      <Span>Sign Up</Span>
    </SignInHintWrapper>
  )
}

export default SignInHint
